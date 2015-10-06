Template.logWorkout.helpers({
  program: function () {
    if (Programs.findOne({default: true})) {
      var prog = Programs.findOne({default: true})
      prog.currentWorkout++;
      return prog
    }
  }
});

Template.logWorkout.events({
  'click #clear': function (event) {
    event.preventDefault();
    Meteor.call('clearActiveWorkouts', Meteor.userId());
    var activeProgram = Programs.findOne({userId: Meteor.userId(), default: true});
    if (activeProgram) {
      //activeProgram.default = false;
      Programs.update({_id: activeProgram._id}, {$set: {default: false}})
    }
  }
});

Template.logWorkout.rendered = function () {
  //console.log('rendered');
  var curDate = new Date;
  var month = (curDate.getMonth() + 1);
  console.log(month);
  console.log(month.toString().length);
  if (month.toString().length == 1) {
    month = '0' + month
  }
  var dtest = curDate.getFullYear() + '-' + month + '-' + curDate.getDate();
  console.log(dtest);
  $('#datePicker').val(dtest);
};