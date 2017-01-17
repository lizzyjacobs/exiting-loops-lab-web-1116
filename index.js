function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break
    } else {
      array[i] = changeValue
    }
  }
  return array
}

function keepGoing(array, changeValue, skipValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] != skipValue) {
      array[i] = changeValue
    }
  }
  return array
}

function findBy(array, findFn) {
  var found = null
  for (let i = 0; i < array.length; i++) {
    if (findFn(array[i])) {
      return array[i]
    } 
  }
  return found
}
