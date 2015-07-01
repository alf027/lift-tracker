Template.workoutForm.events({
  'submit form': function (event) {
    event.preventDefault();

    var liftName = document.getElementById('liftName');
    var numSets = document.getElementById('numSets').value;
    var setsArr = [];

    for (var i = 1; i <= numSets; i++) {
      var tempObj = {};
      tempObj[i] = {};
      tempObj[i].reps = '';
      tempObj[i].weight = '';
      tempObj[i].setNum = i;
      setsArr.push(tempObj[i])
    }

    workout.insert({liftName: liftName.value, numSets: numSets, sets: setsArr});

  }
});