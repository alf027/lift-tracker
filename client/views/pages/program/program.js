Template.programWizard.helpers({
  programs: function () {
    return Programs.find({editing:true})
  }
});

Template.programWizard.events({
  'submit form': function (event,template) {
    event.preventDefault();
    var programObj = {};
    var programName = template.$('#Name').val();
    var numWorkouts = template.$('#numWorkouts').val();
    var workoutArr = [];

    for (var i = 0; i<numWorkouts;i++) {
      workoutArr.push({})
    }

    programObj.workouts = workoutArr;
    programObj.name = programName;
    programObj.numWorkouts = numWorkouts;
    programObj.currentWorkout = 0;
    programObj.default = false;
    programObj.editing = true;

    Programs.insert(programObj);
    console.log(Programs.find({editing:true}))


  }




  //  var liftName = document.getElementById('liftName');
  //  var numSets = document.getElementById('numSets').value;
  //
  //  var setsArr = [];
  //
  //  for (var i = 1; i <= numSets; i++) {
  //    var tempObj = {};
  //    tempObj[i] = {};
  //    tempObj[i].reps = '';
  //    tempObj[i].weight = '';
  //    tempObj[i].setNum = i;
  //    setsArr.push(tempObj[i])
  //  }
  //
  //  workout.insert({liftName: liftName.value, numSets: numSets, sets: setsArr, userId:Meteor.userId()},function(err,doc){
  //    console.log(doc)
  //  });
  //  liftName.value = '';
  //  document.getElementById('numSets').value ='';
  //
  //}
});




Template.programWizard.rendered = function(){

};

