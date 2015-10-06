Template.programWizard.helpers({

});

Template.programWizard.events({

    'submit form.program-init': function (event, template) {
        event.preventDefault();
        //console.log('id',Object);
        var programObj = {};
        var programName = template.$('#name').val();
        var numWorkouts = template.$('#numWorkouts').val();
        var workoutArr = [];

        for (var i = 0; i < numWorkouts; i++) {
            workoutArr.push({workoutNum: i + 1, lifts: []});
            //workoutArr.push({lifts:[]})
        }

        programObj.workouts = workoutArr;
        programObj.name = programName;
        programObj.numWorkouts = numWorkouts;
        programObj.currentWorkout = 0;
        programObj.default = false;
        programObj.editing = true;
        programObj.userId = Meteor.userId();
        //programObj.workouts.lifts = []

        Session.set('lifts', []);
        Programs.insert(programObj ,function(err,doc){
            console.log(doc);
            Router.go('editProgram',{id:doc})
        });

        //console.log(Programs.find({editing:true}))


    },
    'click #programSub': function (event, template) {
        var program = Programs.findOne({editing: true});
        console.log(program);
        Programs.update({_id: program._id},
            {
                $set: {
                    editing: false
                }
            });
        console.log(Programs.findOne({editing: true}))
    }
});


Template.programWizard.rendered = function () {

};

