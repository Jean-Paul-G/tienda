function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Aquí deberías realizar la validación del usuario y la contraseña (puedes usar localStorage para almacenar los datos)
    // En un entorno real, deberías usar una base de datos y un servidor para la autenticación.

    // Ejemplo básico:
    if (username === "usuario" && password === "contraseña") {
        window.location.href = "usuario.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

function register() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;

    // Aquí deberías realizar la lógica de registro (almacenar en una base de datos, por ejemplo)
    // En un entorno real, deberías usar una base de datos y un servidor para el registro de usuarios.

    // Ejemplo básico:
    alert("Cuenta creada con éxito. Ahora puedes iniciar sesión.");
    toggleForms();
}

function toggleForms() {
    var loginContainer = document.getElementById("loginContainer");
    var registerContainer = document.getElementById("registerContainer");
    var toggleText = document.getElementById("toggleText");

    if (loginContainer.style.display === "none") {
        loginContainer.style.display = "block";
        registerContainer.style.display = "none";
        toggleText.innerHTML = "¿No tienes cuenta? <a href='#' onclick='toggleForms()'>Regístrate</a>";
    } else {
        loginContainer.style.display = "none";
        registerContainer.style.display = "block";
        toggleText.innerHTML = "¿Ya tienes cuenta? <a href='#' onclick='toggleForms()'>Iniciar Sesión</a>";
    }
}
