export const inyectarHelpers = (req, res, next) => {
  res.locals.helpersScripts = [
    "/js/seguridad/utils/notyf.js",
    "/js/seguridad/utils/httpClient.js",
  ];
  res.locals.helpersStyles = ["/css/seguridad/notyf.css"];
  next();
};
