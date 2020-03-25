(function($) {
  $('.list-group-item').on('click', function(e) {
    var is_mobile = false;

    if( $('#mobile').css('display')=='none') {
        is_mobile = true;       
    }

    if ($(e.target).hasClass('active')){
      $(".list-group-item").removeClass("active");
    } else {
      $(".list-group-item").removeClass("active");
      $(e.target).addClass("active");
      if (is_mobile == true){
        scrollToBottom('list-of-services');
      } else {
        $('#about-us-click').click();
      }
    }
    $('.collapse').collapse('hide');
    
    });
    $('.nav-custom-diff-page').on('click', function(e) {
      e.preventDefault();
      window.location.href = e.target + '#service';
    })
  // Add smooth scrolling to all links in navbar
  $(".navbar a,a.btn-appoint, .quick-info li a, .overlay-detail a").on('click', function(event) {

    var hash = this.hash;
    if (hash) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function() {
        window.location.hash = hash;
      });
    }

  });

  //
  $(document).ready(function() {
    $("#hours-of-operation").load('times.html');
    $('#covid19-modal').modal('show');
  });

  $(".navbar-collapse a").on('click', function() {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar-default").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

})(jQuery);

function scrollToBottom(id){
  div_height = $("#"+id).height() + $('#banner-size').height() + $('#banner-size').height()+ $('#banner-size').height();
  div_offset = $("#"+id).offset().top;
  window_height = $(window).height();
  $('html,body').animate({
    scrollTop: div_offset-window_height+div_height
  },'slow');
}
