function breakOut(array, changeValue, stopValue) {
  array.forEach(element, index, array) => {
    console.log(element)
    if (element !== stopValue) {array[index]= changeValue}
    else {return array}
  })
  return array
}
function keepGoing(array, changeValue, skipValue) {}
function findBy(array, findFn) {}
