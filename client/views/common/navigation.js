Template.navigation.rendered = function () {

  // Initialize metisMenu
  $('#side-menu').metisMenu();
  // Move modal to body
  // Fix Bootstrap backdrop issu with animation.css
  $('.modal').appendTo("body");

};

Template.navigation.helpers({

  data: function () {
    if (Meteor.users.findOne().emails[0].address) {
      return Meteor.users.findOne().emails[0].address;
    } else return undefined

  }

});

Template.navigation.events({


  'click #logout' : function(e, t) {
    Meteor.logout();
    Router.go('logWorkout');

  }

});


