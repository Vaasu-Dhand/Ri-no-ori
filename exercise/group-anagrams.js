/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const sortedAnagrams = []; // [["eat"]]

  strs.forEach((word) => {
    // List is empty
    if (sortedAnagrams.length === 0) {
      sortedAnagrams.push([word]);
    }
    // List is not empty
    else {
      let anagramGroupFound = false;
      for (let i = 0; i < sortedAnagrams.length; i++) {
        const groupWord = sortedAnagrams[i];
        console.log({ groupWord, word, isAnagram: isAnagram(groupWord, word) });
        // Call a function which returns true if this word is an anagram
        if (isAnagram(groupWord[0], word)) {
          sortedAnagrams[i].push(word);
          anagramGroupFound = true;
          break;
        }
      }
      if (!anagramGroupFound) {
        sortedAnagrams.push([word]);
      }
    }
  });
  // The first is the word being comapred

  return sortedAnagrams;
};

function isAnagram(word1, word2) {
  let map = {};
  for (let char of word1) {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }
  console.log(map);
  for (let char2 of word2) {
    if (!map[char2]) return false;
  }
  return true;
}
console.log(isAnagram("c", "ac"));
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
