// tags: ['array', 'easy']
/**
 *
 * You are given an array of objects representing words in a document. Each object looks like this:
 * {
 *  word: string,
 *  frequency: number
 * }
 * 
 * Write a function isValidWordCollection(words, bannedWords) that returns true if all the following conditions are met:
	1.	✅ No Banned Words: None of the words are in the bannedWords list. 
	2.	✅ All Frequencies Positive: Every word has a frequency greater than 0.
	3.	✅ Has at Least One Long Word: At least one word is longer than 7 characters.
	4.	✅ Total Frequency: Return true only if the total frequency of all words is at least 100.
 */
/**
 * @param {Array<{word: string, frequency: number}>} words
 * @param {string[]} bannedWords
 * @return {boolean}
 */
function isValidWordCollection(words, bannedWords) {
  let hasOneLongWord = false;
  let totalFreq = 0;

  for (let i = 0; i < words.length; i++) {
    const { word, frequency } = words[i];

    const hasBannedWord = bannedWords.includes(word);
    if (hasBannedWord) return false;

    if (frequency <= 0) return false;

    // Check this only if one long word has not been found
    if (!hasOneLongWord) {
      if (word.length > 7) {
        hasOneLongWord = true;
      }
    }
    totalFreq += frequency;
  }
  if (!hasOneLongWord) return false;
  if (totalFreq < 100) return false;
  return true;
}

const words = [
  { word: "algorithm", frequency: 10 },
  { word: "data", frequency: 30 },
  { word: "structure", frequency: 60 },
];

const bannedWords = ["foo", "bar"];

console.log(isValidWordCollection(words, bannedWords)); // true

const words2 = [
  { word: "foo", frequency: 40 },
  { word: "data", frequency: 30 },
  { word: "structure", frequency: 60 }
];

const bannedWords2 = ["foo", "bar"];


console.log(isValidWordCollection(words2, bannedWords2)); // false
