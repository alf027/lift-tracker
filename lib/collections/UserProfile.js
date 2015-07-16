UserProfile = new Meteor.Collection("userProfile");

if(Meteor.isServer) {
  UserProfile.allow({
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