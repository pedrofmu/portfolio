document.getElementById("about_btn").addEventListener("click", function() {
    var destino = document.getElementById("about_part");

    // Calcula la posición de desplazamiento en vh
    var vhValue = 7; // Cambia este valor según tus preferencias

    // Convierte vh a píxeles (1 vh es el 1% de la altura de la ventana)
    var offset = (vhValue * window.innerHeight) / 100;

    // Realiza el desplazamiento suave hacia la posición calculada
    window.scrollTo({ top: destino.offsetTop - offset, behavior: "smooth" });
});

document.getElementById("proyectos_btn").addEventListener("click", function() {
    var destino = document.getElementById("proyectos_part");

    // Calcula la posición de desplazamiento en vh
    var vhValue = 8; // Cambia este valor según tus preferencias

    // Convierte vh a píxeles (1 vh es el 1% de la altura de la ventana)
    var offset = (vhValue * window.innerHeight) / 100;

    // Realiza el desplazamiento suave hacia la posición calculada
    window.scrollTo({ top: destino.offsetTop - offset, behavior: "smooth" });
});

document.getElementById("title_btn").addEventListener("click", function() {
    var destino = document.getElementById("contact_part");

    // Realiza el desplazamiento suave hacia la posición calculada
    destino.scrollIntoView({ behavior: "smooth" });
}); 
