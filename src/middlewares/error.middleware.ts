import { NextFunction, Request, Response } from "express";

function errorMiddleware(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || "Internal Server Error";

  return res.status(statusCode).json({ success: false, message: errorMessage });
}

export default errorMiddleware;
