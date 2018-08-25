/*
 * Programming Quiz: Murder Mystery (3-4)
 * Directions:
For this quiz, you're going to help solve a fictitious murder mystery that happened here at Udacity! 
A murder mystery is a game typically played at parties wherein one of the partygoers is secretly, and unknowingly, playing a murderer, and the other attendees must determine who among them is the criminal. It's a classic case of whodunnit.

Since this might be your first time playing a murder mystery, we've simplified things quite a bit to make it easier. Here's what we know! In this murder mystery there are:

four rooms: the ballroom, gallery, billiards room, and dining room,
four weapons: poison, a trophy, a pool stick, and a knife,
and four suspects: Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, and Mr. Kalehoff.
We also know that each weapon corresponds to a particular room, so...

the poison belongs to the ballroom,
the trophy belongs to the gallery,
the pool stick belongs to the billiards room,
and the knife belongs to the dining room.
And we know that each suspect was located in a specific room at the time of the murder.

Mr. Parkes was located in the dining room.
Ms. Van Cleve was located in the gallery.
Mrs. Sparr was located in the billiards room.
Mr. Kalehoff was located in the ballroom.
To help solve this mystery, write a combination of conditional statements that:

sets the value of weapon based on the room and
sets the value of solved to true if the value of room matches the suspect's room
Afterwards, print the following to the console if the mystery was solved:

__________ did it in the __________ with the __________!
Fill in the blanks with the name of the suspect, the room, and the weapon. For example,

Mr. Parkes did it in the dining room with the knife!
TIP: Make sure to test your code with different values. For example,

If room equals gallery and suspect equals Ms. Van Cleve, then Ms. Van Cleve did it in the gallery with the trophy! should be printed to the console.
 */

// change the value of `room` and `suspect` to test your code
var room = "Ball Room";
var weapon = "";
var suspect = "Mr. Kalehoff";
var solved = false;

if (room === 'Ball Room' && suspect === 'Mr. Kalehoff'){
    weapon = 'poison';
    solved = true;
} else if (room === 'Galley' && suspect === 'Ms. Van Cleve'){
    weapon = 'Trophy';
    solved = true;
} else if (room === 'Billiard Room' && suspect === 'Mrs. Sparr'){
    weapon = 'Pool';
    solved = true;
} else if (room === 'Dining Room' && suspect === 'Mr. Parkes'){
    weapon = 'Knife';
    solved = true;
} else {
    solved = false;
}

if (solved){
    console.log(suspect + ' did it in the ' + room + ' with the ' + weapon + '!');
}



