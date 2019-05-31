/*----------------------------------------------------
IS ISOGRAM CHALLENGE
----------------------------------------------------*/

// EXAMPLES:
// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case


function isIsogram(str) {
  for (i = 0; i < str.length; i++)
    if (str.toLowerCase().substring(i + 1).includes(str.toLowerCase().charAt(i)))
      return false;
  return true;
 }



console.log(isIsogram('thomas'));
console.log(isIsogram('moses'));
console.log(isIsogram('abc'));
console.log(isIsogram('toOl'));
console.log(isIsogram('Greg'));
console.log(isIsogram('meow'));
