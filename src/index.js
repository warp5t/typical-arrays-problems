exports.min = function min (array) {
  if ( typeof array.length !== 0 || array !==[] || array ==='object') {

    return (Math.min.apply(null, array));
  }
  else {return 0} ;
}

exports.max = function max (array) {
  if (typeof array.length !== 0 || array !==[] || array ==='object') {

    return (Math.max.apply(null, array));
  }
  else  {return 0} ;
}

exports.avg = function avg (array) {
  if (typeof array.length !== 0 || array !==[] || array ==='object') {
    let result = 0;
    let sum = 0;
    for (let numberIn of array) {
      sum = sum + numberIn;
      result = sum / array.length;
      result = result.toFixed(2);
    }

    return result;
  }
  else {return 0} ;
}
