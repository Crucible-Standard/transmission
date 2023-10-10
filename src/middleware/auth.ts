import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { code } from './errors';


type JwtPayload = {
  id: number;
  name: string;
  email: string;
  created_at: Date;
};

/**
 * @description Create a JWT token
 * @param {JwtPayload} payload - Payload to be signed 
 * @returns {string} JWT token
 */
const createJwtToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
};


/**
 * @description Middleware to check if user is authenticated and refresh token on every request
 * @param {Request} request - Express request object
 * @param {Response} response - Express response object
 * @param {NextFunction} next - Express next function
 */
const authMiddleware = (  
  request: Request,
  response: Response,
  next: NextFunction
  ) => {
  const authHeader = request.get('Authorization');
  if (!authHeader) {
    const customError = code(400);
    return next(customError);
  }

  const token = authHeader.split(' ')[1];
  let jwtPayload: { [key: string]: any };
  try {
    jwtPayload = jwt.verify(token, process.env.JWT_SECRET as string) as { [key: string]: any };
    ['iat', 'exp'].forEach((keyToRemove) => delete jwtPayload[keyToRemove]);
    request.jwtPayload = jwtPayload as JwtPayload;
  } catch (err) {
    const customError = code(400);
    return next(customError);
  }

  try {
    // Refresh and send a new token on every request
    const newToken = createJwtToken(jwtPayload as JwtPayload);
    response.setHeader('token', `Bearer ${newToken}`);
    return next();
  } catch (err) {
    const customError = code(400);
    return next(customError);
  }
};

export { authMiddleware };
