import SEGURIDAD_CONFIG from "../config/seguridad.js";
import jwt from "jsonwebtoken";

const SECRET_JWT = SEGURIDAD_CONFIG.SECRET_JWT_KEY;

export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, SECRET_JWT);
    return decoded;
  } catch (error) {
    console.error(error);
    throw new Error("Token inválido o expirado");
  }
}
