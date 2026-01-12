import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import SEGURIDAD_CONFIG from "./config/seguridad.js";
import createSeguridadRouter from "./routes/seguridad.js";
import createApiSeguridadRouter from "./routes/apiSeguridad.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = SEGURIDAD_CONFIG.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());

// Archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

// Rutas
app.use("/seguridad", createSeguridadRouter());
app.use("/api/seguridad", createApiSeguridadRouter());

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
