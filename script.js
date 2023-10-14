function hideMenu(){
  const ul = document.querySelector('ul');
  ul.style.right= '-170px';
  ul.style.transition = '1s';
}
function showMenu(){
const ul = document.querySelector('ul');
ul.style.right = '0';
ul.style.transition = '1s';
}
function addDarkmodeWidget() {
    new Darkmode().showWidget();
  }
  const options = {
    bottom: '124px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
  window.addEventListener('load', addDarkmodeWidget);
  $(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
  });
  //for button moving

  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('a[href="#aboutms"]').addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector("#aboutms").scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('a[href="#courses"]').addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector("#courses").scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('a[href="#ceritfi"]').addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector("#ceritfi").scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('a[href="#aboutsum"]').addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector("#aboutsum").scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('a[href="#contactx"]').addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector("#contactx").scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  //creating axis
  var scrollInterval;
  var scrollButton = document.getElementById("scroll-to-top");
  
  document.addEventListener("DOMContentLoaded", function() {
    scrollButton.addEventListener("click", function(event) {
      event.preventDefault();
      scrollInterval = setInterval(scrollToTop, 8);
    });
  
    function scrollToTop() {
      if (window.pageYOffset === 0) {
        clearInterval(scrollInterval);
      }
      window.scrollBy(0, -scrollSpeed);
      scrollSpeed += acceleration;
    }
  
    var scrollSpeed = 6;
    var acceleration = 1;
  
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 300) {
        scrollButton.classList.add("show");
      } else {
        scrollButton.classList.remove("show");
      }
    });
  });
  
  //tab
  var navLinks = document.getElementById("navLinks");
  function showMenu() {
    navLinks.style.right = "0";
  }
  function hideMenu()
   {
    navLinks.style.right = "-200px";
  }
  