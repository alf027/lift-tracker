Template.viewPrograms.helpers({
    programs: function () {
        return Programs.find()
    }

    //program: function () {
    //    console.log(Programs.findOne({_id:Session.get('program')}))
    //    return Programs.findOne({_id:Session.get('program')})
    //}

});

Template.viewPrograms.events({
 'change #viewProgram': function (event,template) {
     console.log(event);
     Session.set('program',$( "#viewProgram").val());
     //Router.go('viewOneProgram',{id:$( "#viewProgram").val()})
     console.log('test');
 }
});


Template.viewPrograms.rendered = function () {
    Session.set('program',$( "#viewProgram").val());
    console.log(Programs.findOne({_id:Session.get('program')}))
};
