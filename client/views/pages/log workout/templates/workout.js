Template.workout.helpers({
  lift: function () {
    return workout.find()
  }

});

Template.workout.events({
  'keyup .lift': function (event) {
    var id = this._id;
    var value = event.target.value;
    var setNum = parseInt(event.target.dataset.setnum);
    var type = event.target.dataset.type;

    if (type === 'reps') {
      Meteor.call('setConfigReps', id, setNum, value)
    } else if (type === 'weight') {
      Meteor.call('setConfigWeight', id, setNum, value);
    }
  },

  'click .removeBut': function () {
    workout.remove({_id: this._id})
  },
  'click #finish': function () {
    //console.log workout(workout.find().fetch());
    var curDate = new Date;
    var completed = workout.find().fetch();
    completed.dateFinished = curDate;
    console.log(completed);
    //
    CompletedWorkouts.insert(completed, function (err, doc) {
      if (err) {
        console.log(err)
      } else {
        console.log(doc)
        console.log(CompletedWorkouts.find().fetch());
      }
    });

  }
})


