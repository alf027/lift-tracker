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
}