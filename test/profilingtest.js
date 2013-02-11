var each = function(obj, iterator) {
if(Array.isArray(obj)) {
  for(var i = 0; i < obj.length; i++){
    iterator(obj[i], i, obj)
  }
} else {
  for(var i in obj) {
    if(obj.hasOwnProperty(i)){
      iterator(obj[i], i, obj);
    }
  }
}
};

var contains = function(obj, target) {
var itExists = false;
each(obj, function(i){
  if(i === target){
    itExists = true;
  }
})
return itExists;
};

var memoize = function(func) {
var keyPair={};
return function(n){
  if(keyPair[n] === undefined) {
    keyPair[n] = func(n);
  } 
  return keyPair[n];
};
};



var fib = function fib (n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
};
var fastFib = _.memoize(fib);

// fib(100);
console.log("startfib");
fastFib(10)
console.log("dunfibbin");


