Template.workoutForm.events({
  'submit form': function (event) {
    event.preventDefault();

    var liftName = document.getElementById('liftName');
    var numSets = document.getElementById('numSets').value;
    var setsArr = [];

    for (var i = 1; i <= numSets; i++) {
      var tempObj = {};
      tempObj[i] = {};
      tempObj[i].reps = '';
      tempObj[i].weight = '';
      tempObj[i].setNum = i;
      setsArr.push(tempObj[i])
    }

    workout.insert({liftName: liftName.value, numSets: numSets, sets: setsArr});

  }
});


  var presidents = [
    "George Washington",
    "John Adams",
    "Thomas Jefferson",
    "James Madison",
    "James Monroe",
    "John Quincy Adams",
    "Andrew Jackson",
    "Martin Van Buren",
    "William Henry Harrison",
    "John Tyler",
    "James Knox Polk",
    "Zachary Taylor",
    "Millard Fillmore",
    "Franklin Pierce",
    "James Buchanan",
    "Abraham Lincoln",
    "Andrew Johnson",
    "Ulysses Simpson Grant",
    "Rutherford Birchard Hayes",
    "James Abram Garfield",
    "Chester Alan Arthur",
    "Grover Cleveland",
    "Benjamin Harrison",
    "Grover Cleveland",
    "William McKinley",
    "Theodore Roosevelt",
    "William Howard Taft",
    "Woodrow Wilson",
    "Warren Gamaliel Harding",
    "Calvin Coolidge",
    "Herbert Clark Hoover",
    "Franklin Delano Roosevelt",
    "Harry S. Truman",
    "Dwight David Eisenhower",
    "John Fitzgerald Kennedy",
    "Lyndon Baines Johnson",
    "Richard Milhous Nixon",
    "Gerald Rudolph Ford",
    "James Earl Carter, Jr.",
    "Ronald Wilson Reagan",
    "George Herbert Walker Bush",
    "William Jefferson Clinton",
    "George Walker Bush",
    "Barack Hussein Obama"
  ];

  $("#liftName").autocomplete({
    source:presidents
  });
