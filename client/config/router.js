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

Router.route('/pageTwo', function () {
    this.render('pageTwo');
});

Router.route('/', function () {
    Router.go('logWorkout');
});

