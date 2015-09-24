var nextWorkout = function() {
  var program = Programs.findOne({default:true});
  var id = program._id;
  //console.log(program);
  var curWork = program.currentWorkout;
  //console.log(curWork);
  if(curWork + 1 < program.workouts.length ) {
    curWork ++
  } else {
    curWork = 0
  }
  Programs.update({_id:id},{$set :{currentWorkout:curWork}},function(err,doc){
    var program = Programs.findOne({default:true});
    var current = program.currentWorkout;
    Meteor.call('clearActiveWorkouts', Meteor.userId());
    console.log(program.workouts[current]);
    for(var i = 0;i<program.workouts[current].lifts.length; i++) {
      var cur = program.workouts[current].lifts[i];
      cur.workoutNum = program.workouts[current].workoutNum;
      cur.totalWorkouts = program.workouts[current].length;
      cur.programName = program.name;
      cur.programId = program._id;
      cur.userId = Meteor.userId();
      console.log(cur);
      workout.insert(cur);
    }
  });


};


Template.workout.helpers({
  lift: function () {
    if(workout.find().fetch().length === 0){
      return undefined
    } else {
      return workout.find()
    }
  }
});

Template.workout.events({
  'keyup .lift': function (event) {
    var id = this._id;
    var value = event.target.value;
    var setNum = parseInt(event.target.dataset.setnum);
    var type = event.target.id;

    if (type === 'reps') {
      Meteor.call('setConfigReps', id, setNum, value)
    } else if (type === 'weight') {
      Meteor.call('setConfigWeight', id, setNum, value);
    }
  },

  'click .collapse-link': function (event) {
    var element = $(event.target);
    var ibox = element.closest('div.ibox');
    var button = element.closest("i");
    var content = ibox.find('div.ibox-content');
    content.slideToggle(200);
    button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
    ibox.toggleClass('').toggleClass('border-bottom');
    setTimeout(function () {
      ibox.resize();
      ibox.find('[id^=map-]').resize();
    }, 50);
  },

  'click .removeBut': function () {
    workout.remove({_id: this._id})
  },
  'click #finish': function () {
    var isProgram = false;
    //console.log workout(workout.find().fetch());
    var curDate = new Date;
    var testDate = $('#datePicker').val();
    console.log(testDate);
    curDate = testDate;
    //curDate = (curDate.getMonth() + 1) + '/' + curDate.getDate() + '/' +  curDate.getFullYear();
    //console.log(curDate);
    var completed = {};
    var workTest = workout.find().fetch();
    //console.log(workTest[0]);
    if(workTest[0].programId) {
      isProgram = true;
      var programObj = Programs.findOne({_id:workTest[0].programId});
      console.log('program obj', programObj);
      completed.programName = workTest[0].programName;
      completed.programId = workTest[0].programId;
      completed.workoutNum = workTest[0].workoutNum;
      completed.numWorkouts =  programObj.numWorkouts


    }

    //update profile workouts completed and weight lifted
    var profile = UserProfile.findOne({userId:Meteor.userId()});
    var workoutsCompleted = profile.completedWorkouts;
    workoutsCompleted ++;
    var weight = profile.weightLifted;

    completed.lifts = workout.find().fetch();
    completed.lifts.forEach(function(e){
      console.log('each lift', e);
      e.sets.forEach(function(eset) {
        weight += Number(eset.weight)
      })
    });


    UserProfile.update({_id:profile._id},{$set:{weightLifted:weight , completedWorkouts:workoutsCompleted}}, function (err,doc) {
      console.log('err', err);
      console.log('doc',doc)
    });

    //end profile update

    completed.dateFinished = curDate;
    completed.userId = Meteor.userId();
    if(isProgram){
      Meteor.call('insertCompletedWorkout',completed,Meteor.userId());
      nextWorkout()
    }else {
      Meteor.call('insertCompletedWorkout',completed,Meteor.userId());
      Meteor.call('clearActiveWorkouts',Meteor.userId());
    }

    console.log(completed);
    //console.log(Meteor.userId());
    //workout.remove({});



  },
  'click #skip': function () {
    nextWorkout()
    //var program = Programs.findOne({default:true});
    //var id = program._id;
    //console.log(program);
    //var curWork = program.currentWorkout;
    //console.log(curWork);
    //if(curWork + 1 < program.workouts.length ) {
    //  curWork ++
    //} else {
    //  curWork = 0
    //}
    //Programs.update({_id:id},{$set :{currentWorkout:curWork}});
    //
    //var current = program.currentWorkout;
    //Meteor.call('clearActiveWorkouts', Meteor.userId());
    //console.log(program.workouts[current]);
    //for(var i = 0;i<program.workouts[current].lifts.length; i++) {
    //  var cur = program.workouts[current].lifts[i];
    //  cur.workoutNum = program.workouts[current].workoutNum;
    //  cur.totalWorkouts = program.workouts[current].length;
    //  cur.programName = program.name;
    //  cur.programId = program._id;
    //  cur.userId = Meteor.userId();
    //  console.log(cur);
    //  workout.insert(cur);
    //}

  }
});



