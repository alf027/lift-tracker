Template.loginModal.events({
  'submit form' : function(e, t){

    e.preventDefault();

    // retrieve the input field values
    var email = t.find('#login-email').value
      , password = t.find('#login-password').value;

    // Trim and validate your fields here....

    // If validation passes, supply the appropriate fields to the
    // Meteor.loginWithPassword() function.
    Meteor.loginWithPassword(email, password, function(err){
      if (err){console.log(err)}
      $('.modal').modal('hide');
      Router.go('/logWorkout');

      // The user might not have been found, or their passwword
      // could be incorrect. Inform the user that their
      // login attempt has failed.

      // The user has been logged in.
    });
    return false;
  },
  'click #registerBut': function (e,t) {
    $('#login').modal('hide');
    $('#register').modal('show');
  },
  'click #guestLogin':function(){
    var email = 'guest'+ Math.floor(Math.random() * 10000) + 1 +'@guest.com'
      , password = 'guestpass' + Math.floor(Math.random() * 10000) + 1
      , firstName = 'guest' + Math.floor(Math.random() * 10000) + 1
      , lastName = 'guest' + Math.floor(Math.random() * 10000) + 1;

    // Trim and validate the input

    Accounts.createUser({email: email, password : password, newUser:true}, function(err){

      if (err) {
        console.log(err);
        // Inform the user that account creation failed
      } else {
        console.log(Meteor.userId());
        Meteor.call('insertNewUserProfile', Meteor.userId(),firstName, lastName);
        Router.go('/profile');
        $('#register').modal('hide');
        $('#login').modal('hide');
      }
    });
    return false;
  }



});