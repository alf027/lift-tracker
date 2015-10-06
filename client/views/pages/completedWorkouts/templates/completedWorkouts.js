/**
 * Created by Alfano on 7/1/15.
 */
Template.completedWorkouts.helpers({

  completedWorkouts: function () {
    if (Session.get('programId') === 'None') {
      console.log('none');
      return CompletedWorkouts.find({programId: {$exists: false}});
      //console.log(Session.get('programId'))

    } else if (Session.get('programId')) {
      return CompletedWorkouts.find({programId: Session.get('programId')});
    } else if (Session.get('monthFilter')) {
      var filteredArr = [];
      var completed = CompletedWorkouts.find({}).fetch();
      completed.forEach(function (e) {

        var completedDate = e.dateFinished.split('-');
        var completedYear = completedDate[0];
        var completedMonth = completedDate[1];
        //console.log(completedMonth.length);

        if (completedMonth.length == '1') {
          completedMonth = '0' + completedMonth
        }

        //console.log('sesmonth', Session.get('monthFilter'));
        //console.log('locmonth', completedMonth);

        if (completedMonth === Session.get('monthFilter')) {
          filteredArr.push(e)
        }

      });
      return filteredArr;
      //console.log('filtered',filteredArr)
      //console.log(completed)
    }
    return CompletedWorkouts.find();
  },

  programs: function () {
    return Programs.find();
  }
  //workout: function() {
  //  for(var i =0;i<CompletedWorkouts.find().fetch().length;i++) {
  //
  //  }
  //}

});

Template.completedWorkouts.events({
  'change #programSelect': function (event) {
    console.log(event.target.value);
    Session.set('programId', event.target.value);
    console.log(Session.get('programId'))
  },

  'change #monthFilter': function (event) {
    console.log(event.target.value);
    var fullDate = event.target.value;
    console.log(fullDate.split('-'));
    var year = fullDate.split('-')[0];
    var month = fullDate.split('-')[1];
    Session.set('monthFilter', month);
    Session.set('yearFilter', year);

  }
});

Template.completedWorkouts.rendered = function () {
  Session.set('programId', '');
  Session.set('monthFilter', '');
  Session.set('yearFilter', '');

};