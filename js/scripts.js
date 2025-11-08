!(function (e) {
  "use strict";
  e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var t = e(this.hash);
      if ((t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length)
        return (
          e("html, body").animate(
            { scrollTop: t.offset().top },
            1e3,
            "easeInOutExpo",
          ),
          !1
        );
    }
  }),
    e(".js-scroll-trigger").click(function () {
      e(".navbar-collapse").collapse("hide");
    }),
    e("body").scrollspy({ target: ".nav-menu" });
})(jQuery);

// Tema: Toggle manual + auto-detección del sistema
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const html = document.documentElement; // Para setAttribute más rápido
let userPrefersDark = localStorage.getItem("theme") === "dark"; // Flag: ¿el usuario eligió manualmente?

// Función para aplicar tema
function applyTheme(isDark) {
  if (isDark) {
    html.setAttribute("data-theme", "dark");
    toggleSwitch.checked = true;
    localStorage.setItem("theme", "dark");
    userPrefersDark = true; // Marca como preferencia manual
  } else {
    html.setAttribute("data-theme", "light");
    toggleSwitch.checked = false;
    localStorage.setItem("theme", "light");
    userPrefersDark = true; // Marca como manual
  }
}

// Función para toggle manual
function switchTheme(e) {
  applyTheme(e.target.checked);
}

// Detectar preferencia del sistema
const systemDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');

// Inicializar tema
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    // Respeta lo guardado
    applyTheme(savedTheme === "dark");
  } else {
    // Usa sistema como default
    applyTheme(systemDarkQuery.matches);
  }
}

// Escuchar cambios en el toggle
toggleSwitch.addEventListener("change", switchTheme);

// Inicializar al cargar
initTheme();

// Escuchar cambios en el sistema SOLO si no hay preferencia manual (para no overridear al usuario)
function onSystemChange(e) {
  if (!userPrefersDark && !localStorage.getItem("theme")) { // Solo si no hay manual
    applyTheme(e.matches);
  }
}
systemDarkQuery.addEventListener('change', onSystemChange);

// Fix para el checkbox inicial (ajustado)
document.getElementById("checkbox").checked = localStorage.getItem("theme") === "dark";

$(window).resize(function () {
  if ($(window).width() < 992) {
    $("#moveElement").appendTo(".b");
  } else {
    $("#moveElement").appendTo(".a");
  }
});

window.onload = function () {
  if ($(window).width() < 992) {
    $("#moveElement").appendTo(".b");
  } else {
    $("#moveElement").appendTo(".a");
  }
};

$(".toggle-menu").click(function () {
  $(this).toggleClass("active");
  $("#menu").toggleClass("open");
});

$(".main-nav ul li a").on("click", function (e) {
  $(".toggle-menu").removeClass("active");
  $("#menu").removeClass("open");
});

const selectTyped = document.querySelector('.typed');
if (selectTyped) {
  let typed_strings = selectTyped.getAttribute('data-typed-items');
  typed_strings = typed_strings.split(',');
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 40,
    backSpeed: 20,
    backDelay: 2000
  });
}

// Efecto de imagen de preview en hover de cards
document.addEventListener('DOMContentLoaded', function() {
  const cursorImage = document.querySelector("#cursor-image");
  let isHovering = false;

  // Seguimiento del mouse en todo el documento
  document.addEventListener("mousemove", (e) => {
    if (isHovering) {
      cursorImage.style.left = (e.clientX - cursorImage.offsetWidth / 2) + "px";
      cursorImage.style.top = (e.clientY - cursorImage.offsetHeight / 2 + 120) + "px";
    }
  });

  // Para cada área de hover (tus cards)
  const hoverAreas = document.querySelectorAll(".hover-area");
  hoverAreas.forEach((hoverArea) => {
    hoverArea.addEventListener("mouseenter", (e) => {
      const imageSrc = hoverArea.getAttribute("data-cursor-image");
      if (imageSrc) {
        cursorImage.style.backgroundImage = `url('${imageSrc}')`;
        cursorImage.classList.add("show");
        isHovering = true;
      }
    });

    hoverArea.addEventListener("mouseleave", () => {
      cursorImage.classList.remove("show");
      isHovering = false;
    });
  });
});