$(function() {

  // ProgressBar

  $(window).on('scroll', () => {
    
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

  menuLinks.on('click', () => toggleMenu() );

  menuOverlay.on('click', () => toggleMenu() );

  // Slider

  $('.skills-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000,
  });

  // Anchor 

  let $page = $('html, body');
  
  $('a[href*="#"]').on('click', function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 800);
  });

  scrollTop();

  function scrollTop() {
    let scroller = $('.scroller');

    $(window).on('scroll', () => {
      
      if ($(this).scrollTop() >= 600) {
        scroller.fadeIn();
      } else {
        scroller.fadeOut();
      }
    });

    scroller.on('click', (e) => {
      e.preventDefault();
      $('html').animate({scrollTop: 0}, 800);
    });
  }

  $('#submit').on('click', function() {
    let email = $('#email').val().trim(),
        name = $('#name').val().trim(),
        message = $('#message').val().trim();

    $.ajax({
      type: 'POST',
      url: '../ajax/mail.php',
      cache: false,
      data: { 
        'name': name, 
        'email': email,
        'message': message
      },
      dataType: 'html',
      beforeSend: function() {
        $('#submit').prop('disabled', true);
      },
      success: function (data) {
        if(!data){
          alert('Error');
        } else {
          alert('sps za message');
          $('.contact-feedback__form').trigger('reset');
        }
        $('#submit').prop('disabled', false );
      }
    });
        
  });


});





