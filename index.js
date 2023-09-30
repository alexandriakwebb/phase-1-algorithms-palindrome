function isPalindrome(word) {
  let wordArray = word.split('')
  let reverseArray = word.split('').reverse()
  for (let i = 0; i < wordArray.length; i++) {
    for (let j = 0; j < reverseArray.length; j++) {
      if(wordArray[i] !== reverseArray[j]) {
        return false 
      } else {
        return true
      }
    }
  }
}

isPalindrome('alex')

/* 
  Take the word and turn it into an array (saved as a variable)
  Save the reverse of that array as another variable. 
  Loop through two variables and see if each index matches; if so return true.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
