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
      "SELECT states.id as state_id, lgas.id as lga_id, state, lgas.name as lga, governor, deputy_governor, chairman, vice_chairman, secretary FROM lgas INNER JOIN states ON lgas.state = states.name WHERE lgas.name = $1",
      [county]
    );

    return res.status(200).json({
      status: true,
      components: results[0].components,
      matched: matchedResults.rows[0],
    });
  } catch (error) {
    console.log(error)
    return res.status(400).json({ status: false, message: error });
  }
};

export { getLocation };