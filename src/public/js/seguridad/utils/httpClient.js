import SEGURIDAD_CONFIG from "../../../../config/seguridad";
function httpSeguridadClient(url, options = {}) {
  return fetch(
    `${SEGURIDAD_CONFIG.URL_BASE_API_SEGURIDAD}${url}`,
    options
  ).then((response) => {
    return response.json();
  });
}

window.httpSeguridadClient = httpSeguridadClient;
