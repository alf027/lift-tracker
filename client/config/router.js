Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound',

});

//
// Example pages routes
//
Router.route('/logWorkout', {
    waitOn: function() { return Meteor.subscribe('workout');},
    name: 'logWorkout'
});

Router.route('/completedWorkouts', {
    waitOn: function() { return Meteor.subscribe('completedWorkouts'); },
    name:'completedWorkouts'
});

Router.route('/login', {
    name: 'login'
});

Router.route('/register', {
    name: 'register'
});

Router.route('/', function () {
    Router.go('logWorkout');
});

