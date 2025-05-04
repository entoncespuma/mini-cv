// Mostrar u ocultar el botón según el scroll
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Función para volver arriba con scroll suave
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
window.addEventListener("scroll", () => {
    console.log("Scroll detectado");
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

// Función para actualizar el ícono según el tema actual
function updateThemeIcon() {
    if (body.classList.contains("dark-mode")) {
        themeIcon.textContent = "☀️"; // Modo claro
    } else {
        themeIcon.textContent = "🌙"; // Modo oscuro
    }
}

// Cargar preferencia previa
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
}
updateThemeIcon();

// Alternar tema
toggleThemeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Guardar preferencia
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

    updateThemeIcon();
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            entry.target.classList.remove("hidden");
        }
    });
}, {
    threshold: 0.1
});

// Seleccionar todos los elementos con la clase "hidden"
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(el => observer.observe(el));
// Validación y envío del formulario de contacto
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  // Validaciones simples
  if (nombre === "" || email === "" || mensaje === "") {
    formMessage.textContent = "Por favor completa todos los campos.";
    formMessage.className = "form-message error";
    return;
  }

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValido) {
    formMessage.textContent = "Por favor ingresa un correo válido.";
    formMessage.className = "form-message error";
    return;
  }

  // Simulación de envío exitoso
  formMessage.textContent = "¡Mensaje enviado con éxito!";
  formMessage.className = "form-message success";
  form.reset();
});
