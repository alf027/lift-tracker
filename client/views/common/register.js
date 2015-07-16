Template.register.events({
  'submit form' : function(e, t) {
    e.preventDefault();
    var email = t.find('#account-email').value
      , password = t.find('#account-password').value;

    // Trim and validate the input

    Accounts.createUser({email: email, password : password, newUser:true}, function(err,doc){
      //console.log(email);
      console.log(doc);
      if (err) {
        console.log(err);
        // Inform the user that account creation failed
      } else {
        Router.go('/profile');
        $('#register').modal('hide');
        $('#login').modal('hide');
        //Meteor.call('insertNewUserProfile', this.userId, function(err,userProfile){
        //  if(err) {
        //    console.log(err);
        //    Router.go('./register')
        //  } else {
        //    console.log(userProfile);

          //}
        //});




        // Success. Account has been created and the user
        // has logged in successfully.
      }

    });
    

    return false;
  },
  'click #registerLogin': function (e,t) {
    $('#login').modal('show');
    $('#register').modal('hide');

  }
});