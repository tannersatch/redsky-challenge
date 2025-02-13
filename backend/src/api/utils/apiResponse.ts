import { Response } from 'express';

interface SuccessResponse {
  status: string;
  data?: any;
  pagination?: {
    total: number;
    perPage: number;
    page: number;
    totalPages: number;
  }
}

interface ErrorResponse {
  status: string;
  message: string;
  code: number;
}

const successResponse = (res: Response, data: any, statusCode: number = 200): Response<SuccessResponse> => {
  return res.status(statusCode).json({ status: 'success', data });
}

const errorResponse = (res: Response, message: string, code: number): Response<ErrorResponse> => {
  return res.status(code).json({ status: 'error', message, code });
}

export const send = {
  success: successResponse,
  error: errorResponse
}
 