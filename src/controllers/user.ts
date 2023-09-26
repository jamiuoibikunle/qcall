import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import pool from "../../config/database";

const registerUser = async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, email, date_of_birth, gender, password } =
      req.body;

    const lower_case_email = email.toLowerCase();

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
      [
        first_name,
        last_name,
        lower_case_email,
        date_of_birth,
        gender,
        hashedPassword,
      ]
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
      "SELECT password, id, email FROM users WHERE email = $1",
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
      { id: userDetails.rows[0].id, email: userDetails.rows[0].email },
      process.env.SECRET_KEY as string,
      { expiresIn: "30d" }
    );

    return res.status(200).json({
      status: 200,
      token,
      message: `Authenticated as ${email}`,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    let fieldsToUpdate: string = "";
    let sqlQuery: string = "";
    let count = 1;

    for (const [key, value] of Object.entries(req.body)) {
      if (key !== "user" && key !== "password") {
        sqlQuery += `${key}=$${count},`;
        fieldsToUpdate += `${value},`;
        count++;
      }
    }

    const fieldsToUpdateArray = fieldsToUpdate.replace(/.$/, "").split(",");

    const result = await pool.query(
      `UPDATE users SET ${sqlQuery.replace(/.$/, "")} WHERE id = ${
        req.body.user
      }`,
      fieldsToUpdateArray
    );
    if (result.rowCount === 0)
      return res.status(400).json({
        status: false,
        message: "Encountered error while updating user",
      });

    return res.status(200).json({
      status: 200,
      message: `User successfully updated`,
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      "SELECT id, first_name, last_name, date_of_birth, email, gender FROM users WHERE id = $1",
      [req.body.user]
    );
    if (result.rowCount === 0)
      return res.status(400).json({
        status: false,
        message: "Encountered error while getting user details",
      });

    return res.status(200).json({
      status: 200,
      message: result.rows[0],
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};

export { getUser, loginUser, registerUser, updateUser };
