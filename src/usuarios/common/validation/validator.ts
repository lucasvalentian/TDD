import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

// Define tu esquema de validación personalizado aquí
const schema = Joi.object({
  cliente: Joi.string().required(),
  monto: Joi.number().required(),
  tasaInteres: Joi.number().required(),
  plazo: Joi.number().required(),
});

// Middleware de validación personalizado
function validateRequest(req: Request, res: Response, next: NextFunction) {
  const { error } = schema.validate(req.body);

  if (error) {
    const errorMessage = error.details.map((detail) => detail.message).join(', ');
    return res.status(400).json({ error: errorMessage });
  }

  next(); // Continúa con la siguiente middleware o ruta si la validación es exitosa
}

export default validateRequest;
