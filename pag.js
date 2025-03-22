// Aqui esta el apartado para validar el formulario al enviarlo
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Obtener los valores de los campos
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    // Validación de campos vacíos
    if (nombre === "" || correo === "" || mensaje === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Validación de formato de correo electrónico
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return;
    }

    // Mensaje de éxito si todo está correcto
    alert("¡Formulario enviado con éxito!");
    this.reset(); // Reinicia el formulario
});

document.querySelectorAll(".btn-mas").forEach(button => {
    button.addEventListener("click", function() {
        // Encuentra la descripción dentro del mismo contenedor de proyecto
        let proyecto = this.closest(".proyecto");
        let descripcion = proyecto.querySelector(".descripcion-extra");

        // Alterna la visibilidad de la descripción extra
        descripcion.classList.toggle("mostrar");

        // Cambia el texto del botón según el estado
        this.textContent = descripcion.classList.contains("mostrar") ? "Ver menos" : "Ver más";
    });
});

