/**
 * Created by Alfano on 7/1/15.
 */
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
    },
    insertCompletedWorkout:function(completed, user) {
      CompletedWorkouts.insert(completed, function (err, doc) {
        console.log(completed);
        console.log('in insert');
        if (err) {
          console.log(err)
        } else {
          workout.remove({});

          console.log(doc);
          //console.log(CompletedWorkouts.find().fetch());
        }
      });
    }

  });

});

