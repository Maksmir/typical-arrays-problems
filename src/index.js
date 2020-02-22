
exports.min = function min(array) {
  let minN = 0
  if (array && array.length>0) {
    minN = array[0]
    for (let i = 1; i < array.length; i++) {
      if (minN > array[i]) {
        minN = array[i]
      }
    }
  }
  return minN
}

exports.max = function max(array) {
  let maxN = 0
  if (array && array.length>0) {
    maxN = array[0]
    for (let i = 1; i < array.length; i++) {
      if (maxN < array[i]) {
        maxN = array[i]
      }
    }
  }
  return maxN
}

exports.avg = function avg(array) {
  let mean = 0
  if (array && array.length>0) {
    for (let i = 0; i < array.length; i++) {
      mean += array[i]
    }
    mean /= array.length
  }
  return mean;
}
