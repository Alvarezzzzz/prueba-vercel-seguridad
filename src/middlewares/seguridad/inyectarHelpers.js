import SEGURIDAD_CONFIG from "../../config/seguridad/seguridad.js";
export const inyectarHelpers = (req, res, next) => {
  res.locals.helpersScripts = [
    "/js/seguridad/utils/notyf.js",
    "/js/seguridad/utils/httpClient.js",
  ];
  res.locals.helpersStyles = ["/css/seguridad/notyf.css"];
  res.locals.configSeguridad = {
    SEGURIDAD_URL_BACKEND: SEGURIDAD_CONFIG.URL_BASE_API_SEGURIDAD,
  };
  next();
};
