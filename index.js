function isPalindrome(word) {
  // Write your algorithm here
  let wordBackwards = ""
  for (let i = word.length - 1; i >= 0; i--){ 
    // console.log(word)
    // console.log(word.length)
    wordBackwards += word[i];
  // console.log(wordBackwards)
  }
  if(word === wordBackwards){
      // console.log(true)
    return true
   }
  else{
      // console.log(false)
      return false
    } 
} 


/* 
  Add your pseudocode here
  initialize empty new word variable (= "") inside function
  iterate over each letters in the input word the opposite way (right 2 left)
    as the loop goes the opposite way it put those letters into the empty word varbiale
    console.log() the new word variable after the loop
    if the new word variable matches (===) the input word
    return true
    else 
    return false
*/

/*
  Add written explanation of your solution here
  declare the new word varibale 
  for loop
  if statement
  2 loops
  -1 to go thru the word the regular way(left 2 right)
  -2 to go thru the word the opposite way (right 2 left)
  no need for the 2nd loop i only need to go thru the word the ooposite way 
  after the  going thru the word the ooposite way 
  if statmement checking if the possible word matches (===) the new word varibale
  if they match or (equal the same thing) return true
  if not 
  return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));


  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("Expecting: false");
  console.log("=>", isPalindrome("string"));
  
}

module.exports = isPalindrome;

// //after watching video
// function reverseString(word) {
//   return word.split("").reverse().join("");
// }

// function isPalindrome(word) {
//   // reverse the input string
//   const reversedWord = reverseString(word);
//   // compare the reversed string to the input
//   return word === reversedWord;
// }
