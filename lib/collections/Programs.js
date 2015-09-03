/**
 * Created by Alfano on 6/30/15.
 */
Programs = new Meteor.Collection("Programs");

if(Meteor.isServer) {
  Programs.allow({
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