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

// Tema: Toggle manual + auto-detección del sistema (mantiene lo anterior)
const toggleSwitch = document.querySelector('.theme-icon-toggle input[type="checkbox"]');
const html = document.documentElement;
let userPrefersDark = localStorage.getItem("theme") === "dark";

function applyTheme(isDark) {
  const themeIcon = document.getElementById("theme-icon");
  const themeContainer = document.querySelector(".theme-toggle-container");
  const isEnglish = window.location.pathname.includes('en.html');

  if (isDark) {
    html.setAttribute("data-theme", "dark");
    if (toggleSwitch) toggleSwitch.checked = true;
    if (themeIcon) {
      themeIcon.classList.remove("lni-moon");
      themeIcon.classList.remove("lni-night");
      themeIcon.classList.add("lni-sun");
    }
    if (themeContainer) {
      themeContainer.setAttribute("data-tooltip", isEnglish ? "Light mode" : "Modo claro");
    }
    localStorage.setItem("theme", "dark");
    userPrefersDark = true;
  } else {
    html.setAttribute("data-theme", "light");
    if (toggleSwitch) toggleSwitch.checked = false;
    if (themeIcon) {
      themeIcon.classList.remove("lni-sun");
      themeIcon.classList.add("lni-night");
    }
    if (themeContainer) {
      themeContainer.setAttribute("data-tooltip", isEnglish ? "Dark mode" : "Modo oscuro");
    }
    localStorage.setItem("theme", "light");
    userPrefersDark = true;
  }
}

function switchTheme(e) {
  applyTheme(e.target.checked);
}

const systemDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');

function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    applyTheme(savedTheme === "dark");
  } else {
    applyTheme(systemDarkQuery.matches);
  }
}

if (toggleSwitch) {
  toggleSwitch.addEventListener("change", switchTheme);
}
initTheme();

function onSystemChange(e) {
  if (!userPrefersDark && !localStorage.getItem("theme")) {
    applyTheme(e.matches);
  }
}
systemDarkQuery.addEventListener('change', onSystemChange);

const checkbox = document.getElementById("checkbox");
if (checkbox) {
  checkbox.checked = localStorage.getItem("theme") === "dark";
}

// Toggle simple de idioma: Cambia entre index.html (ES) y en.html (EN) al clickear
document.addEventListener('DOMContentLoaded', function () {
  // Selector para links de idioma (mobile: #menu .menu-footer .bitem a, desktop: .settings-bar .bitem a)
  const langLinks = document.querySelectorAll('#menu .menu-footer .bitem a, .settings-bar .bitem a');

  langLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Previene href default
      const pathname = window.location.pathname;
      const isEnglish = pathname.includes('en.html');
      // Redirect relativo: funciona en GitHub Pages desde /me/
      if (isEnglish) {
        // En EN, ve a ES
        window.location.href = 'index.html';
      } else {
        // En ES, ve a EN
        window.location.href = 'en.html';
      }
    });
  });
});

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
document.addEventListener('DOMContentLoaded', function () {
  const cursorImage = document.querySelector("#cursor-image");
  let isHovering = false;

  document.addEventListener("mousemove", (e) => {
    if (isHovering) {
      cursorImage.style.left = (e.clientX - cursorImage.offsetWidth / 2) + "px";
      cursorImage.style.top = (e.clientY - cursorImage.offsetHeight / 2 + 144) + "px";
    }
  });

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