/**
 * Created by Alfano on 7/1/15.
 */
Template.completedWorkouts.helpers({
  completedWorkouts: function () {
    return CompletedWorkouts.find();
  }
  //workout: function() {
  //  for(var i =0;i<CompletedWorkouts.find().fetch().length;i++) {
  //
  //  }
  //}

});