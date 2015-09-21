

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
    //console.log workout(workout.find().fetch());
    var curDate = new Date;
    curDate = (curDate.getMonth() + 1) + '/' + curDate.getDate() + '/' +  curDate.getFullYear();
    console.log(curDate);
    var completed = {};
    completed.lifts = workout.find().fetch();
    completed.dateFinished = curDate;
    completed.userId = Meteor.userId();
    console.log(completed);
    //console.log(Meteor.userId());
    //workout.remove({});
    Meteor.call('insertCompletedWorkout',completed,Meteor.userId());


  }
});



