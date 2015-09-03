Meteor.publish('workout', function(userId) {
  return workout.find({userId:userId});
});

Meteor.publish('completedWorkouts', function(userId) {
  return CompletedWorkouts.find({userId:userId});
});

Meteor.publish('userProfile', function(userId) {
  return UserProfile.find({userId:userId});
});

Meteor.publish('Programs', function(userId) {
  return Programs.find({});
});