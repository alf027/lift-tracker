Template.programWorkoutForm.events({
    'submit form': function (event,template) {
        event.preventDefault();

        var program = Programs.findOne({});
        var liftName = event.target[0].value;
        var workoutNum = event.target[0].id[event.target[0].id.length -1];
        var numSets = event.target[1].value;
        var setsArr = [];
        var liftId = Math.floor(Math.random() * 50000) + 1;

        for (var i = 1; i <= numSets; i++) {
            var tempObj = {};
            tempObj[i] = {};
            tempObj[i].setId = Math.floor(Math.random() * 50000) + 1,
            tempObj[i].reps = '';
            tempObj[i].weight = '';
            tempObj[i].setNum = i;
            setsArr.push(tempObj[i])
        }

        var newLift = {sets:setsArr,liftName:liftName,numSets:numSets,userId:Meteor.userId,liftId:liftId};

        program.workouts[workoutNum-1].lifts.push(newLift);
        Programs.update({_id:program._id},
            { $set: {
                workouts: program.workouts
            }
            },function(doc){
                console.log('update');
                console.log(doc)
            });

        template.$('#'+event.target[0].id).val('');
        template.$('#'+event.target[1].id).val('');

    }
});


Template.programWorkoutForm.rendered = function() {
    //alert('Hi there!')
    $(function() {
        var availableTags = [
            "Bench",
            "Back Squat",
            "Front Squat",
            "Hammer Curls",
            "Curls",
            "Calf Raises",
            "Deadlift",
            "Romanian Deadlift",
            "Lat Pulldown",
            "Sit Ups",
            "Push ups",
            "Pull ups",
            "Leg Extension",
            "Tricep Pulldown",
            "Power Cleans",
            "Squat Cleans",
            "Incline Bench",
            "Pendlay Rows",
            "Barbell Upright Rows",
            "Dumbell Bench",
            "Dumbell Incline Bench",
            "Dumbell Rows"
        ];
        $( "#liftName1" ).autocomplete({
            source: availableTags
        });
        $( "#liftName2" ).autocomplete({
            source: availableTags
        });
        $( "#liftName3" ).autocomplete({
            source: availableTags
        });
        $( "#liftName4" ).autocomplete({
            source: availableTags
        });
        $( "#liftName5" ).autocomplete({
            source: availableTags
        });
        $( "#liftName6" ).autocomplete({
            source: availableTags
        });
        $( "#liftName7" ).autocomplete({
            source: availableTags
        });
    });

    var firstLift = document.getElementById('firstLift');


    if(firstLift) {

    }
};