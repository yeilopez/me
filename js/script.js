$('.toggle-menu').click (function(){
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
  });

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
}
    else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
}

  toggleSwitch.addEventListener('change', switchTheme, false);

    if (currentTheme === 'dark') {
          toggleSwitch.checked = true;
    }
