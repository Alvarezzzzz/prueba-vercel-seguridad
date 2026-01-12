import "dotenv/config";
const SEGURIDAD_CONFIG = {
  PORT: process.env.SEGURIDAD_PORT || 3000,
  SALT_ROUNDS: process.env.SEGURIDAD_SALT_ROUNDS || 10,
  SECRET_JWT_KEY:
    process.env.SEGURIDAD_SECRET_JWT_KEY ||
    "default-secret-change-in-production",
  URL_BASE_API_SEGURIDAD:
    process.env.SEGURIDAD_URL_BASE_API_SEGURIDAD ||
    "https://charlotte-seguridad.onrender.com",
};

export default SEGURIDAD_CONFIG;
