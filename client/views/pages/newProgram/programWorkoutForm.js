Template.programWorkoutForm.events({
    'submit form': function (event,template) {
        event.preventDefault();


        var program = Programs.findOne({editing:true});
        console.log(program);
        //console.log(Programs.find().fetch()[0].workouts);
        //console.log(workouts);






        var liftName = event.target[0].value;
        var workoutNum = event.target[0].id[event.target[0].id.length -1];
        console.log(workoutNum);
        //var liftName = document.getElementById('liftName').value;
        var numSets = event.target[1].value;
        console.log(liftName);
        console.log(numSets);
        console.log(event.target)
        var setsArr = [];

        for (var i = 1; i <= numSets; i++) {
            var tempObj = {};
            tempObj[i] = {};
            tempObj[i].reps = '';
            tempObj[i].weight = '';
            tempObj[i].setNum = i;
            setsArr.push(tempObj[i])
        }
        var newLift = {sets:setsArr,liftName:liftName,numSets:numSets,userId:Meteor.userId}


        //program.workouts[workoutNum-1].lifts = [];
        program.workouts[workoutNum-1].lifts.push(newLift);
        //program.workouts[workoutNum-1].liftName = liftName;
        //program.workouts[workoutNum-1].numSets = numSets;
        console.log(program._id);
        Programs.update({_id:program._id},
            { $set: {
                workouts: program.workouts
            }
            },function(doc){;
                console.log('update')
                console.log(doc)
            });


        //console.log(Programs)
        //if(!Session.get("lifts")) {
        //    Session.set("lifts",[]);
        //}
        //var lifts = Session.get("lifts").slice();
        //lifts.push({sets:setsArr});
        //Session.set("lifts", lifts);

        //Session.set('workouts', {sets:setsArr});
        //console.log(Session.get('lifts'));

        template.$('#'+event.target[0].id).val('');
        template.$('#'+event.target[1].id).val('');



        ////Programs.insert({liftName: liftName.value, numSets: numSets, sets: setsArr, userId:Meteor.userId()},function(err,doc){
        //    console.log(doc)
        //});




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