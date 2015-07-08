Meteor.publish('workout', function() {
  return workout.find();
});

Meteor.publish('completedWorkouts', function() {
  return CompletedWorkouts.find();
});