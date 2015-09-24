Template.showCompletedWorkout.helpers({
  'lifts': function() {
    //var comp = CompletedWorkouts.findOne({})
    //console.log(comp)
    return CompletedWorkouts.findOne({})
  }
})