// tags: ["array", "easy", "searching"]

/**
 * Find all the occurances of an element
 * e.g: find all indexes of "a"
 */

const array = ["a", "b", "a", "c", "a", "d"];

function findAllOccurances(array, element) {
  let foundIndex = array.indexOf(element);
  if (foundIndex === -1) return [];

  const indexes = [];
  while (foundIndex !== -1) {
    indexes.push(foundIndex)
    foundIndex = array.indexOf(element, foundIndex + 1);
  }
  return indexes;
}

console.log(findAllOccurances(array, "a")); // [0, 2, 4]
