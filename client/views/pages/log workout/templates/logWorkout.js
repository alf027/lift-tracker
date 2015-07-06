// Run this when the meteor app is started
if (Meteor.isServer) {
  //console.log('startup');
  //Meteor.startup(function () {
  //  Meteor.methods({
  //    setConfigReps: function (id, setNum, val) {
  //      workout.update({
  //        _id: id.toString(),
  //        "sets.setNum": setNum
  //      }, {$set: {"sets.$.reps": val}}, function (err, status) {
  //        console.log(err, status)
  //      });
  //
  //
  //    },
  //    setConfigWeight: function (id, setNum, val) {
  //      workout.update({_id: id, "sets.setNum": setNum}, {$set: {"sets.$.weight": val}});
  //
  //    }
  //    //setConfigWeight: function (target,id) {
  //    //  var setNum = target.dataset.setNum;
  //    //  var weight = target.value;
  //    //  workout.update({_id: id,"sets.setNum":setNum},{$set:{"sets.$.weight":weight}})
  //    //}
  //
  //
  //  });
  //  //function setConfig() {
  //  //  workout.update({_id: "9vw8JaSmRdbCT5ifW","sets.setNum":1},{$set:{"sets.$.reps":5}})
  //  //}
  //});
}