
Template.profile.helpers({
  userProfile: function () {
    console.log(UserProfile.findOne({}));
    return UserProfile.findOne();
  },
  benchMax:200

  //workout: function() {
  //  for(var i =0;i<CompletedWorkouts.find().fetch().length;i++) {
  //
  //  }
  //}

});

Template.profile.rendered = function(){

  // Set options for peity charts
  //$(".line").peity("line",{
  //  fill: '#1ab394',
  //  stroke:'#169c81'
  //})
  //
  //$(".bar").peity("bar", {
  //  fill: ["#1ab394", "#d7d7d7"]
  //})

};