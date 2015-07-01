Template.mainLayout.rendered = function () {

  // Minimalize menu when screen is less than 768px
  $(window).bind("resize load", function () {
    if ($(this).width() < 769) {
      $('body').addClass('body-small')
    } else {
      $('body').removeClass('body-small')
    }
  });

  // Fix height of layout when resize, scroll and load
  $(window).bind("load resize scroll", function () {
    if (!$("body").hasClass('body-small')) {

      var navbarHeigh = $('nav.navbar-default').height();
      var wrapperHeigh = $('#page-wrapper').height();

      if (navbarHeigh > wrapperHeigh) {
        $('#page-wrapper').css("min-height", navbarHeigh + "px");
      }

      if (navbarHeigh < wrapperHeigh) {
        $('#page-wrapper').css("min-height", $(window).height() + "px");
      }

      if ($('body').hasClass('fixed-nav')) {
        $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
      }
    }
  });


  //SKIN OPTIONS
  //Uncomment this if you want to have different skin option:
  //Available skin: (skin-1 or skin-3, skin-2 deprecated)
  //$('body').addClass('skin-1');

  // FIXED-SIDEBAR
  // Uncomment this if you want to have fixed left navigation
  $('body').addClass('fixed-sidebar');
  $('.sidebar-collapse').slimScroll({
    height: '100%',
    railOpacity: 0.9
  });

  //$('body').addClass('canvas-menu');
  //
  //// Initialize slimScroll for left navigation
  //$('.sidebar-collapse').slimScroll({
  //  height: '100%',
  //  railOpacity: 0.9
  //});

  //// Remove special off canvas class
  //$('body').removeClass('canvas-menu');
  //
  //
  //// Destroy slim scroll from left navigation
  //$('.sidebar-collapse').slimScroll({
  //  destroy:true
  //});
  //
  //// Remove inline style form slimScroll
  //$('.sidebar-collapse').removeAttr("style");
  //
  //// Get back to normal stat of left navigation
  //$('body').removeClass('mini-navbar');

  // BOXED LAYOUT
  // Uncomment this if you want to have boxed layout
  // $('body').addClass('boxed-layout');


};