Router.configure({
    layoutTemplate: 'mainLayout',
    notFoundTemplate: 'notFound'

});

//
// Example pages routes
//

Router.route('/logWorkout', function () {
    this.render('logWorkout');
});

Router.route('/completedWorkouts', function () {
    this.render('completedWorkouts');
});

Router.route('/', function () {
    Router.go('logWorkout');
});

