Template.register.events({
  'submit form' : function(e, t) {
    e.preventDefault();
    var email = t.find('#account-email').value
      , password = t.find('#account-password').value
      , firstName = t.find('#first-name').value
      , lastName = t.find('#last-name').value;

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
  },
  'click #registerLogin': function (e,t) {
    $('#login').modal('show');
    $('#register').modal('hide');

  }
});