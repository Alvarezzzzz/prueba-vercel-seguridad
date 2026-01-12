document.addEventListener("DOMContentLoaded", function () {
  console.log("Login page script loaded.");

  const formLogin = document.getElementById("formLogin");
  const btnSubmit = document.getElementById("btn-submit");
  const inputEmail = document.getElementById("input-email");
  const inputPassword = document.getElementById("input-password");

  formLogin.addEventListener("submit", async function (event) {
    // Verifica si los required del formulario son válidos
    if (!formLogin.checkValidity()) {
      console.log("Formulario inválido.");
      return;
    }
    event.preventDefault();
    btnSubmit.disabled = true;
    btnSubmit.textContent = "Iniciando...";
    const email = inputEmail.value;
    const password = inputPassword.value;
    const urlApi = "/api/seguridad/login";

    const response = await fetch(urlApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    if (response.ok) {
      const data = await response.json();
      const access_token = data.access_token;
      const user = data.user;
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("administrative_user", JSON.stringify(user));
      alert(data.message);
    } else {
      const errorData = await response.json();
      window.seguridad_notyf.error(
        // string de varias lineas
        `
        const { email, password } = req.body;     const response = await fetch(       ,       {         method: "POST",         headers: {           "Content-Type": "application/json",         },         body: JSON.stringify({ email, password }),       }     );      if (response.ok) {       const data = await response.json();       const token = data.token;       res.cookie("access_token", token, {         httpOnly: true,         secure: true,         sameSite: "Strict",         maxAge: 24 * 60 * 60 * 1000, // 1 day       });       const dataUser = verifyToken(token);       res.json({         success: true,         access_token: token,         user: dataUser,         message: "Login successful",       });     } else {       const error = await response.json();       res.status(401).json({         success: false,         message: error.message || "Credenciales inválidas",       });     }
      `
      );
      console.error("Error en el inicio de sesión:", errorData);
    }

    btnSubmit.disabled = false;
    btnSubmit.textContent = "Iniciar sesión";
  });
});
