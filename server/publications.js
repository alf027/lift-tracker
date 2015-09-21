Meteor.publish('workout', function(userId) {
  return workout.find({userId:userId});
});

Meteor.publish('completedWorkouts', function(userId) {
  return CompletedWorkouts.find({userId:userId});
});

Meteor.publish('userProfile', function(userId) {
  return UserProfile.find({userId:userId});
});

Meteor.publish('OneProgram', function(userId,id) {
  return Programs.find({userId:userId,_id:id});
});

Meteor.publish('Programs', function(userId) {
  return Programs.find({userId:userId});
});