/**
 * Created by Alfano on 7/1/15.
 */
Meteor.startup(function () {
  console.log('made it');
  Meteor.onConnection(function(test){
    console.log('on connection' + test.clientAddress)
  });
  Meteor.methods({
    getCompletedWorkouts: function(){
      console.log('completed');
      CompletedWorkouts.find({},function(err,docs){
        return docs;
      })
    },
    setConfigReps: function (id, setNum, val) {
      workout.update({_id: id.toString(), "sets.setNum": setNum}, {$set: {"sets.$.reps": val}}, function (err,status) {
        console.log(err,status)
      });
    },
    setConfigWeight: function (id, setNum, val) {
      workout.update({_id: id, "sets.setNum": setNum}, {$set: {"sets.$.weight": val}});
    },
    insertCompletedWorkout:function(completed, user) {
      Meteor.onConnection(function(test){
        console.log('in method' + test.clientAddress)
      });

      console.log(this.connection);
      CompletedWorkouts.insert(completed, function (err, doc) {
        console.log(completed);
        console.log('in insert');
        if (err) {
          console.log(err)
        } else {
          //console.log(user);
          //workout.remove({userId:user});
          Meteor.call('clearActiveWorkouts',user);
          //console.log(doc);
          return doc;
          //console.log(CompletedWorkouts.find().fetch());
        }
      });
    },
    insertNewUserProfile:function(id,firstName,lastName) {
      UserProfile.insert({userId:id, firstName:firstName, lastName:lastName, completedWorkouts:0, weightLifted:0, liftMaxes:[{liftName:'Bench',max:0},{liftName:'Squat', max:0},{liftName:'Deadlift',max:0}]})
    },

    clearActiveWorkouts: function(userId){
      if(userId) {
        console.log('remove');
        workout.remove({userId:userId});
      } else {
        console.log('error')
      }
    }
  });

});

