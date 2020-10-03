
function avg () {
let check = arr.length;
  if (check !== 0) {
    let result = 0;
    let sum = 0;
    for (let numberIn of arr) {
      sum = sum + numberIn;
      result = sum / arr.length;
      result = result.toFixed(2);
    }
    console.log(result);
    return result;
  }
  else return 0;
}


function max () {
  if (arr.length !==0) {
    console.log(Math.max.apply(null, arr));
    return (Math.max.apply(null, arr));
  }
  else return 0;
}

function min () {
  if (arr.length !==0) {
    console.log (Math.min.apply(null, arr));
    return (Math.min.apply(null, arr));
  }
  else return 0;
}

avg();
max();
min();
