$(document).ready(function () {
  function myFunction() {
    var current = document.getElementsByClassName('active');
    $('topnav a').each(function () {
      if ($(this).prop('href') == window.location.href) {
        current.className = '';
        $(this).addClass('active'); 
      }
    });
  }
});