Template.viewOneProgram.helpers({
    program: function () {
        return Programs.find({_id: Session.get('program')})
    }
});

Template.viewOneProgram.events({
    'click #active': function (events, template) {
        var program = Programs.findOne({_id: Session.get('program')});
        var current = program.currentWorkout;
        Meteor.call('removeActivePrograms', Meteor.userId());
        //console.log(workout.find({}).fetch());
        //console.log(Programs.findOne({_id: Session.get('program')}))
    //    Programs.update({_id: Session.get('program')}
        //})
        Programs.update({_id: Session.get('program')},
            {
                $set: {
                    default: true
                }
            });
        //console.log(Programs.findOne({_id: Session.get('program')}));

        console.log(Meteor.userId());
        var userId = Meteor.userId();
        Meteor.call('clearActiveWorkouts', Meteor.userId());
        console.log(program.workouts[current]);
        for(var i = 0;i<program.workouts[current].lifts.length; i++) {
            var cur = program.workouts[current].lifts[i];
            cur.workoutNum = program.workouts[current].workoutNum;
            cur.totalWorkouts = program.workouts[current].length;
            cur.programName = program.name;
            cur.programId = program._id;
            cur.userId = Meteor.userId();
            console.log(cur);
            workout.insert(cur);
        }
        //programs.insert()
        //Meteor.call('clearActiveWorkouts', Meteor.userId);

        //console.log(Programs.findOne({_id: Session.get('program')}));


        //workout.remove({});

}
})