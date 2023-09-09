import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import pool from "../../config/database";

const registerUser = async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, email, date_of_birth, gender, password } =
      req.body;

    if (
      !first_name ||
      !last_name ||
      !email ||
      !date_of_birth ||
      !gender ||
      !password
    )
      return res
        .status(400)
        .json({ status: 400, message: "Required fields missing" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const duplicate = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (duplicate.rows.length > 0)
      return res.status(200).json({
        status: 400,
        message: `Duplicate: ${email} is already enrolled`,
      });

    const result = await pool.query(
      "INSERT INTO users (first_name, last_name, email, date_of_birth, gender, password) VALUES ($1, $2, $3, $4, $5, $6)",
      [first_name, last_name, email, date_of_birth, gender, hashedPassword]
    );
    if (!result.rows)
      return res.status(400).json({
        status: 400,
        message: `Encountered error while saving user`,
      });

    const userDetails = await pool.query(
      "SELECT id, email FROM users WHERE email = $1",
      [email]
    );

    const token = jwt.sign(
      userDetails.rows[0],
      process.env.SECRET_KEY as string,
      { expiresIn: "30d" }
    );

    return res.status(200).json({
      status: 200,
      token,
      message: `Authenticated as ${email}`,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .json({ status: 400, message: "Required fields missing" });

    const userDetails = await pool.query(
      "SELECT password FROM users WHERE email = $1",
      [email]
    );
    if (userDetails.rowCount === 0)
      return res.status(400).json({
        status: 400,
        message: `Invalid credentials: ${email} not found`,
      });

    const valid = await bcrypt.compare(password, userDetails.rows[0].password);
    if (!valid)
      return res.status(400).json({
        status: 400,
        message: `Invalid credentials: Password incorrect`,
      });

    const token = jwt.sign(
      userDetails.rows[0],
      process.env.SECRET_KEY as string,
      { expiresIn: "30d" }
    );

    return res.status(200).json({
      status: 200,
      token,
      message: `Authenticated as ${email}`,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, date_of_birth, gender } = req.body;

    const result = pool.query(
      "UPDATE users SET first_name = IsNull(first_name, $1), last_name = IsNull($2, last_name), date_of_birth = IsNull($3, date_of_birth), gender = IsNull($4, gender) WHERE id = 5",
      [first_name, last_name, date_of_birth, gender]
    );

    return res.status(200).json({
      status: 200,
      message: `Updated successfully`,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export { loginUser, registerUser, updateUser };
