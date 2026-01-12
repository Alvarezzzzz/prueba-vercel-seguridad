import { Router } from "express";
import { inyectarHelpers } from "../middlewares/seguridad/inyectarHelpers.js";
import SEGURIDAD_CONFIG from "../config/seguridad.js";

export const createSeguridadRouter = () => {
  const router = Router();
  router.use(inyectarHelpers);
  router.get("/login", async (req, res) => {
    res.render("seguridad/login");
  });

  return router;
};

export default createSeguridadRouter;
