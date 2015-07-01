/**
 * Created by Alfano on 6/30/15.
 */
workout = new Meteor.Collection("workout");
if(Meteor.isServer) {

  workout.allow({
    'insert': function (userId, doc) {
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