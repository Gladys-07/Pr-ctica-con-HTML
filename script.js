// Espera que el DOM cargue
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita que se recargue la página
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // Datos de prueba (puedes cambiarlos por los reales)
      const usuarioValido = "alumno@gmail.com";
      const contraseñaValida = "12345";
  
      if (email === usuarioValido && password === contraseñaValida) {
        alert("Inicio de sesión exitoso");
        window.location.href = "home.html"; // Redirige a la página de inicio
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    });
  });
  
