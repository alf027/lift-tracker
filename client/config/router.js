var IR_BeforeHooks = {
  isLoggedIn: function (pause) {
    if (!(Meteor.loggingIn() || Meteor.user())) {
      //Notify.setError(__('Please login.'));
      this.render('login');

    } else {

      this.next();
    }
  }
// add more before hooks here
};

// (Global) Before hooks for any route
Router.onBeforeAction(IR_BeforeHooks.isLoggedIn);


Router.configure({
  layoutTemplate: 'mainLayout',
  notFoundTemplate: 'notFound',
  data: function () {
    if (Meteor.users.findOne()) {
      return {email: Meteor.users.findOne().emails[0].address}
    } else
      return {}

  }

});
//Router.onBeforeAction(OnBeforeActions.loginRequired);

//
// Example pages routes
//
Router.route('/logWorkout', {
  waitOn: function () {
    return Meteor.subscribe('workout',Meteor.userId())
  },
  name: 'logWorkout'
});

Router.route('/completedWorkouts', {
  waitOn: function () {
    return Meteor.subscribe('completedWorkouts',Meteor.userId());
  },
  name: 'completedWorkouts'
});

Router.route('/profile', {

  waitOn: function () {
    return Meteor.subscribe('userProfile',Meteor.userId());
  },
  name: 'profile'
});

Router.route('/login', {
  name: 'login'
});

Router.route('/program', {

  waitOn: function () {
    return Meteor.subscribe('Programs',Meteor.userId());
  },
  name: 'programWizard'
});



Router.route('/register', {
  name: 'register'
});

Router.route('/', function () {

  Router.go('/logWorkout')


});


