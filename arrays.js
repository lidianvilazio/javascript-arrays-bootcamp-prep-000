var chocolateBars = ["snickers", "hundred", "grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
//spread operator don't change the array
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
//unshift change the array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]

}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
