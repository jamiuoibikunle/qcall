import { NextFunction, Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";

export default function authenticateJWT(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jsonwebtoken.verify(
      token,
      process.env.SECRET_KEY as string,
      (err, user: any) => {
        if (err) {
          return res.sendStatus(403);
        }

        req.body = { ...req.body, user: user.user };
        next();
      }
    );
  } else {
    res.sendStatus(401);
  }
}
