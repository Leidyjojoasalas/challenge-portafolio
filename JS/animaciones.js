// animaciones.js
document.addEventListener("DOMContentLoaded", () => {
    const sr = ScrollReveal({
      duration: 1500,
      delay: 200,
      distance: "50px",
      easing: "ease-out",
      origin: "bottom",
      once: true,
    });

    sr.reveal(".contenedor");
    // Aplica la animación a la sección "sobreMi"
    sr.reveal(".contenedor__sobreMi");
  
    // Aplica la animación a la sección "skill"
    sr.reveal(".skill__container");
  
    // Aplica la animación a la sección "hobbie"
    sr.reveal(".hobbies__contenedor");
  
    // Aplica la animación a la sección "academica"
    sr.reveal(".academic__contenedor");
  
    // Aplica la animación a la sección "experience"
    sr.reveal(".experience__contenedor");
  
    // Aplica la animación a la sección "formcontacto"
    sr.reveal(".formcontacto__contacto");
  
    // Aplica la animación a la sección "footer"
    sr.reveal(".footer__rodape");
  });
  