/*
Write a function that buids an HTML table with the data below. The table should have four columns:
first name, last name, position, and year. If the player is a Senior, her information should be in bold.
*/

var players = [
  {
    first:'Angela',
    last: 'Smith',
    position: 'Guard',
    year: 'Junior'
  },
    {
    first:'Ashley',
    last: 'Roberts',
    position: 'Guard',
    year: 'Senior'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    year: 'Freshman'
  },
   {
    first:'Catherine',
    last: 'McAllister',
    position: 'Forward',
    year: 'Senior'
  },
   {
    first:'Haley',
    last: 'Bishop',
    position: 'Center',
    year: 'Sophomore'
  },
  {
   first:'Renee',
   last: 'Williams',
   position: 'Guard',
   year: 'Senior'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  year: 'Junior'
  }
];
//Write your function here
for(var i=0; i < players.length; i++) {

  if(players[i].year == 'Senior') {
    $('table').append( '<tr><td>' + players[i].first.bold() + '</td><td>' + players[i].last.bold()
    + '</td><td>' + players[i].position.bold() + '</td><td>' + players[i].year.bold() + '</td></tr>');
  } else {
    $('table').append( '<tr><td>' + players[i].first + '</td><td>' + players[i].last
    + '</td><td>' + players[i].position + '</td><td>' + players[i].year + '</td></tr>');
  }
};

/*
EXTRA CREDIT: Write a function that compares the list above with the list below, finds the players that made the All-State team, and displays a message with the results: "Congratulations to Springfield's 2018 North Carolina All-State honorees: ____." Display the message in a div below the table.
Hint: You need two loops, one of which will be 'nested'.*/
var allStars = [
  {
    first:'Melanie',
    last: 'Akers',
    position: 'Forward',
    school:'Johnson High School'
  },
    {
    first:'Olivia',
    last: 'Carter',
    position: 'Foward',
    school:'Providence Day School'
  },
    {
    first:'Sarah',
    last: 'Spangler',
    position: 'Forward',
    school:' Springfield High School'
  },
   {
    first:'Ursula',
    last: 'Jones',
    position: 'Guard',
    school: 'Chatham Senior High School'
  },
   {
    first:'Theresa',
    last: 'Hollinger',
    position: 'Guard',
    school: 'St. Joseph Academy'
  },
  {
   first:'Darleen',
   last: 'Lawrence',
   position: 'Guard',
   school: 'Everton High School'
 },
 {
  first:'Jennifer',
  last: 'Olsen',
  position: 'Forward',
  school: 'Springfield High School'
  }
];
//Write your function here
var aString;

for(var i=0; i < players.length; i++) {
  for(var k=0; k < allStars.length; k++) {
    if(players[i].first == allStars[k].first) {
      if(aString == null) {
        aString = players[i].first.bold() + ' ' + players[i].last.bold();
      } else {
        aString += ' and ' + players[i].first.bold() + ' ' + players[i].last.bold();
      }
    }
  }
};

$('div').append("Congratulations to Springfield's 2018 North Carolina All-State honorees: " + aString + ".");
