Template.showCompletedWorkout.helpers({
  'lifts': function() {
    return CompletedWorkouts.findOne({})
  }
})