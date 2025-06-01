/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 */

(s = "anagram"), (t = "nagaram");

function isValidAnagram(wordOne, wordTwo) {
  let isAnagram = true;

  const wordOneArray = Array.from(wordOne);

  // Loop over the array
  for (let i = 0; i < wordOneArray.length; i++) {
    // For each element in the array, see if the element exsist in wordTwo
    const character = wordOneArray[i];

    let foundCharacterIndex = wordTwo.indexOf(character);
    if (foundCharacterIndex == -1) {
      // If it doesn't break the loop, and return false
      return false;
    } else {
      // If it does, remove the character from the string and continue
      Array.from(wordTwo).splice(foundCharacterIndex, 1).join("");
    }
  }

  return isAnagram;
}

console.log(isValidAnagram(s, t));
