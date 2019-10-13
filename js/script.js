$(function() {

  // ProgressBar

  $(window).on('scroll', function() {
    
    let windowScroll = $(document).scrollTop(),
        windowHeight = ($(document).height() - $(window).height()) / 100,
        per          = windowScroll / windowHeight;

    $('.progress-bar').width(per + '%');

  });

  // Menu

  let menu = $('.menu'),
      menuOverlay = $('.menu-overlay'),
      menuTriger = $('.header-top__menu'),
      menuLinks =  $('.menu a');

  function toggleMenu(){
    menu.toggleClass('active');
    menuTriger.toggleClass('menu-active');
    menuOverlay.toggleClass('show');
  }

  menuTriger.on('click', () => toggleMenu() );

  menuLinks.on('click', (e) => {
    // e.preventDefault();
    toggleMenu();
  });

  menuOverlay.on('click', () => toggleMenu() );

  //Slider

  $('.skills-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000,
  });


});





