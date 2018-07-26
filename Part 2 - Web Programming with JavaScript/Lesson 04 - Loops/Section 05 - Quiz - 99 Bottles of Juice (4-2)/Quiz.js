/*
Directions:
Write a loop that prints out the following song. Starting at 99, and ending at 1 bottle.

99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
...
2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!
Some Notes:

Note the pluralization of the word "bottle" when you go from 2 bottles to 1 bottle.
Your text editor may try to autocorrect your ellipses (...) to the ellipses character (…). Do not use the ellipses character for this quiz; use three consecutive periods instead.

 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
*/

var num = 99;

while (num > 0) {
  let currentBottle = num;
  let takeOneBottle = num - 1;
  let currentBottlesText = currentBottle === 1 ? 'bottle' : 'bottles';
  let takeOnebottlesText = takeOneBottle === 1 ? 'bottle' : 'bottles';
  console.log(`${currentBottle} ${currentBottlesText} of juice on the wall! ${currentBottle} ${currentBottlesText} of juice! Take one down, pass it around... ${takeOneBottle} ${takeOnebottlesText} of juice on the wall!`);

  num -= 1;
}
