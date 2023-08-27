import { Request, Response } from "express";

import pool from "../../config/database";

const getState = async (req: Request, res: Response) => {
	try {
		const results = await pool.query("SELECT * FROM states")
		if (!results) return res.status(200).json({ status: false, message: "No results" });

		return res.status(200).json({ status: true, results: results?.rows });
	} catch (error) {
		return res.status(400).json(error);
	}
};

export { getState };
