// TRY TO FIX

function group(inputArray) {
  const groupedResult = [];
  const slottedStatus = {};
  Array.from({ length: inputArray.length }, (_, index) => index).forEach(
    (element) => {
      slottedStatus[element] = false;
    }
  );
  console.log(slottedStatus);
  // Loop over
  inputArray.forEach((personsGroupSize, personPosition) => {
    if (slottedStatus[personPosition]) {
    } else {
      const group = Array.from({ length: personsGroupSize });
      console.log(group)
      group[0] = personPosition;
      console.log(group)
      console.log({personsGroupSize, personPosition})
      while (group.some((position) => position === undefined)) {
        // Need a way to find the next occurance of this group size
        let nextOccurance = inputArray.indexOf(personsGroupSize, personPosition)
        console.log(nextOccurance)
        slottedStatus[nextOccurance] = true;
        group.push(nextOccurance);
      }
      groupedResult.push(group);
    }
  });
  return groupedResult
}

console.log(group([3, 3, 3, 3, 3, 1, 3]));
