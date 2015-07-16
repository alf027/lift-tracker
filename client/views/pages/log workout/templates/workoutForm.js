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

    workout.insert({liftName: liftName.value, numSets: numSets, sets: setsArr, userId:Meteor.userId()},function(err,doc){
      console.log(doc)
    });
    liftName.value = '';
    document.getElementById('numSets').value ='';

  }
});


Template.workoutForm.rendered = function() {
  //alert('Hi there!')
  $(function() {
    var availableTags = [
      "Bench",
      "Back Squat",
      "Front Squat",
      "Hammer Curls",
      "Curls",
      "Calf Raises",
      "Deadlift",
      "Romanian Deadlift",
      "Lat Pulldown",
      "Sit Ups",
      "Push ups",
      "Pull ups",
      "Leg Extension",
      "Tricep Pulldown",
      "Power Cleans",
      "Squat Cleans",
      "Incline Bench",
      "Pendlay Rows",
      "Barbell Upright Rows",
      "Dumbell Bench",
      "Dumbell Incline Bench",
      "Dumbell Rows"
    ];
    $( "#liftName" ).autocomplete({
      source: availableTags
    });
  });

  var firstLift = document.getElementById('firstLift');


  if(firstLift) {

  }
};
