//
Template.editProgram.helpers({
  programs: function () {
    console.log(Programs.findOne({}));
    return Programs.findOne({})
  }

  //lifts: function() {
  //  return Session.get('lifts')
  //}
});

Template.editProgram.events({
  'keyup .setConfig': function(event,template){
    var liftId = $(event.target).data('liftid');
    var setNum = $(event.target).data('setnum') -1;
    var type =  $(event.target).data('type');
    var workoutNum = $(event.target).data('workoutnum') - 1;
    var id = Router.current().params.id;
    var test = Programs.findOne({_id:id});
    test.workouts[workoutNum].lifts.forEach(function(e,i){
      if (e.liftId == liftId) {
        e.sets[setNum][type] = event.target.value;
        Programs.update({_id:id},{$set:{workouts:test.workouts}})
      }
    })

  },

   'click #programSub': function (event, template) {
    var program = Programs.findOne({});

    console.log(program);
     Router.go('viewPrograms');
     //setConfigReps: function (id, setNum, val) {
     //  workout.update({
     //    _id: id.toString(),
     //    "sets.setNum": setNum
     //  }, {$set: {"sets.$.reps": val}}, function (err, status) {
     //    console.log(err, status)
     //  });
     //},
     //setConfigWeight: function (id, setNum, val) {
     //  workout.update({_id: id, "sets.setNum": setNum}, {$set: {"sets.$.weight": val}});
     //},

     //Router.go()
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

Template.editProgram.rendered = function() {


}