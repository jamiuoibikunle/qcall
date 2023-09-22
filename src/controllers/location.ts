import { Request, Response } from "express";
import { geocode } from "opencage-api-client";
import pool from "../../config/database";

const getLocation = async (req: Request, res: Response) => {
  try {
    if (!req.query.location)
      return res
        .status(400)
        .json({ status: false, message: "Required fields missing" });

    const { results } = await geocode({
      q: req.query.location as string,
      key: process.env.OPENCAGE_KEY,
    });

    const county = results[0].components.county;

    if (!county)
      return res
        .status(400)
        .json({ status: false, message: "Couldn't get county" });

    const matchedResults = await pool.query(
      "SELECT s.id as state_id, s.governor, s.deputy_governor, l.id as lga_id, l.chairman, l.vice_chairman, l.secretary, f.phone_number as fireservice, p.phone_number as police, h.phone_number as health FROM lgas as l INNER JOIN states as s ON l.state = s.name INNER JOIN fireservice as f ON f.state = s.name INNER JOIN health as h ON h.state = s.name INNER JOIN police as p ON p.state = s.name WHERE l.name = $1",
      [county]
    );

    return res.status(200).json({
      status: true,
      components: results[0].components,
      matched: matchedResults.rows[0],
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error });
  }
};

export { getLocation };
