var test = function () {
  $('#lineChart').remove(); // this is my <canvas> element
  $('#graph-container').append('<canvas id="lineChart"><canvas>');

  $('#liftSelect').val(Session.get('selectedLift'));
  $('#programSelect').val(Session.get('selectedProgram'));

  if (!Session.get('selectedLift')) {
    $("#ibox-graph").css("display", "none");
    //Session.set('selectedLift', $('#liftSelect').val());
  } else {
    $("#ibox-graph").css("display", "");
  }
  if (!Session.get('selectedProgram')) {
    $("#ibox-graph").css("display", "none");
    //Session.set('selectedProgram', $('#programSelect').val());
  }

  var completed = CompletedWorkouts.find({programName: Session.get('selectedProgram').toString()}).fetch();
  //var numWorkouts = completed[0].numWorkouts;
  //var liftNames = [];

  var selectedLift = Session.get('selectedLift');
  console.log(selectedLift);
  var liftArr = [];
  console.log(completed);
  completed.forEach(function (workout) {
    workout.lifts.forEach(function (lift) {
      if (lift.liftName === selectedLift) {
        lift.dateCompleted = workout.dateFinished;
        liftArr.push(lift);
      }
      //if(liftNames.indexOf(lift.liftName) === -1) {
      //  liftNames.push(lift.liftName)
      //}
    })
  });
  console.log(liftArr);
  var Dates = [];
  var Weights = [];
  liftArr.forEach(function (lift) {
    Dates.push(lift.dateCompleted);
    Weights.push(lift.sets[0].weight)
  });

  console.log(Dates);
  console.log(Weights);

  var lineData = {
    labels: Dates,
    datasets: [
      {
        label: "Example dataset",
        fillColor: "rgba(26,179,148,0.5)",
        strokeColor: "rgba(26,179,148,0.7)",
        pointColor: "rgba(26,179,148,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(26,179,148,1)",
        data: Weights
      }

    ]
  };

  var lineOptions = {
    scaleShowGridLines: true,
    scaleGridLineColor: "rgba(0,0,0,.05)",
    scaleGridLineWidth: 1,
    bezierCurve: true,
    bezierCurveTension: 0.4,
    pointDot: true,
    pointDotRadius: 4,
    pointDotStrokeWidth: 1,
    pointHitDetectionRadius: 20,
    datasetStroke: true,
    datasetStrokeWidth: 2,
    datasetFill: true,
    responsive: true
  };


  var ctx = document.getElementById("lineChart").getContext("2d");
  var myNewChart = new Chart(ctx).Line(lineData, lineOptions);


};

Template.programAnalytics.helpers({
  programs: function () {
    return Programs.find()
  },
  completed: function () {
    //if (!Session.get('selectedLift')) {
    //  Session.set('selectedLift', $('#liftSelect').val());
    //}
    //if (!Session.get('selectedProgram')) {
    //  Session.set('selectedProgram', $('#programSelect').val());
    //}
    var completed = CompletedWorkouts.find({programName: Session.get('selectedProgram').toString()}).fetch();
    console.log(Session.get('selectedProgram'));
    console.log(completed);
    var numWorkouts = completed[0].numWorkouts;
    var liftNames = [];
    var liftArr = [];
    var selectedLift = Session.get('selectedLift');
    completed.forEach(function (workout) {
      workout.lifts.forEach(function (lift) {
        if (lift.liftName === selectedLift) {
          lift.dateCompleted = workout.dateFinished;
          liftArr.push(lift);
        }
      })
    });
    return liftArr[0]
  },
  liftNames: function () {
    var completed = CompletedWorkouts.find({programName: Session.get('selectedProgram').toString()}).fetch();
    var numWorkouts = completed[0].numWorkouts;
    var liftNames = [];
    if (!Session.get('selectedLift')) {
      Session.set('selectedLift', $('#liftSelect').val());
    }

    var selectedLift = Session.get('selectedLift');
    console.log(selectedLift);
    var liftArr = [];
    console.log(completed);
    completed.forEach(function (workout) {
      workout.lifts.forEach(function (lift) {
        if (liftNames.indexOf(lift.liftName) === -1) {
          liftNames.push(lift.liftName)
        }
      })
    });
    console.log('liftNames', liftNames);
    return liftNames;

  }

});


Template.programAnalytics.rendered = function () {
  test()

};

Template.programAnalytics.events({
  'change #liftSelect': function () {
    Session.set('selectedLift', $('#liftSelect').val());
    test()
  },
  'change #programSelect': function (event) {
    console.log(event.target.value)
    Session.set('selectedProgram', event.target.value);
    Session.set('selectedLift', '');
    test()
  }
});