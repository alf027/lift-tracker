/**
 * Created by Alfano on 6/30/15.
 */
CompletedWorkouts = new Meteor.Collection("completedWorkouts");
if(Meteor.isServer) {

  CompletedWorkouts.allow({
    'insert': function (userId,doc) {
      /* user and doc checks ,
       return true to allow insert */
      return true;
    },
    'update': function (userId,doc) {
      /* user and doc checks ,
       return true to allow insert */
      return true;
    },
    'remove': function (userId,doc) {
      /* user and doc checks ,
       return true to allow insert */
      return true;
    }
  });
  Meteor.startup(function () {
    console.log('made it');
    Meteor.methods({
      setConfigReps: function (id, setNum, val) {
        workout.update({_id: id.toString(), "sets.setNum": setNum}, {$set: {"sets.$.reps": val}}, function (err,status) {
          console.log(err,status)
        });


      },
      setConfigWeight: function (id, setNum, val) {
        workout.update({_id: id, "sets.setNum": setNum}, {$set: {"sets.$.weight": val}});

      }
      //setConfigWeight: function (target,id) {
      //  var setNum = target.dataset.setNum;
      //  var weight = target.value;
      //  workout.update({_id: id,"sets.setNum":setNum},{$set:{"sets.$.weight":weight}})
      //}


    });
    //function setConfig() {
    //  workout.update({_id: "9vw8JaSmRdbCT5ifW","sets.setNum":1},{$set:{"sets.$.reps":5}})
    //}
  });

}