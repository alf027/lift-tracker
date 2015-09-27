Template.navigation.rendered = function () {

  // Initialize metisMenu
  $('#side-menu').metisMenu();
  // Move modal to body
  // Fix Bootstrap backdrop issu with animation.css
  $('.modal').appendTo("body");

};

Template.navigation.helpers({

  //data: function () {
  //  if (Meteor.users.findOne().emails[0].address) {
  //    return Meteor.users.findOne().emails[0].address;
  //  } else return undefined
  //
  //}

});


Template.navigation.events({


  'click .navlink': function (e, t) {
    if ($(window).width() < 750) {
      //alert('Less than 960');
      console.log($(window).width())
      $("body").toggleClass("mini-navbar");

      // Enable smoothly hide/show menu
      if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        $('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(
          function () {
            $('#side-menu').fadeIn(500);
          }, 100);
      } else if ($('body').hasClass('fixed-sidebar')) {
        $('#side-menu').hide();
        setTimeout(
          function () {
            $('#side-menu').fadeIn(500);
          }, 300);
      } else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        $('#side-menu').removeAttr('style');
      }
    }
    else {
      console.log($(window).width())
    }






  }
});


