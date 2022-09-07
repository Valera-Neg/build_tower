/*
Build Tower
Build a pyramid-shaped tower given a positive integer number of floors. 
A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/


function towerBuilder(nFloors) {
 let res = []
  for (let i = 1; i <= nFloors; i++) {
    
    let str = ' '.repeat(nFloors-i);
    console.log(str)
    let str2 = '*'.repeat(i*2 -1);
    console.log(str2)
    res.push(str + str2 + str);
  }
  return res;
}

//console.log(towerBuilder(1)) //> ["*"]
//console.log(towerBuilder(2)) //> [" * ","***"]
//console.log(towerBuilder(3)) //> ["   *  "," *** ","*****"]
console.log(towerBuilder(6)) //> [ "     *     ",   "    ***    ",   "   *****   ",   "  *******  ",   " ********* ",   "***********"]