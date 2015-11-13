/*** Chapter 2 ***/
->//Looping a triangle//
var tri = ''
for(i=0; i<7; i++){
  tri+='#';
  console.log(tri);
}


->//FizzBuzz//
for(i=1; i<=100; i++){
  if(i%3!==0 && i%5!==0){
    console.log(i);
  }
  else{
    var string = '';
    if(i%3===0){
      string+='Fizz';
    }
    if(i%5===0){
      string+='Buzz';
    }
    console.log(string);
  }
}


->//Chessboard//
var name = prompt("Enter size n here");
for(i=1; i<=name; i++){
  var board = '';
  for(j=1; j<=name; j++){
    if(i%2===1){
      if(j%2===0){
        board+=' ';
      }
      if(j%2===1){
        board+='#';
      }
    }
    if(i%2===0){
      if(j%2===0){
        board+='#';
      }
      if(j%2===1){
        board+=' ';
      }
    }
  }
  console.log(board);
}



/*** Chapter 3 ***/
->//Minimum//
var min = function(x,y){
  if(x<y){
    return x;
  }
  else{
    return y;
  }
};
    
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


->//Recursion//
var isEven = function(x){
  if(x===0){
    return true;
  }
  if(x===1){
    return false;
  }
  else{
    return isEven(x-2);
  }
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??


->//Bean Counting//
var countBs = function(str){
  return countChar(str, "b");
};
var countChar = function(str, x){
  var counter = 0;
  for(i=0; i<str.length; i++){
    if(str.charAt(i).toUpperCase() === x.toUpperCase()){
       counter++;
    }
  }
  return counter;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4


/*** Chapter 4 ***/
->//The Sum of a Range//
var range = function(start, end, step){
  var incr;
  if (step === undefined){
 	incr = 1;
  }
  else{
    incr = step;
  }
    var arr = [];
  if(incr>=0){
    for(i=start; i<=end; i+=incr){
      arr.push(i);
    }
  }
  if(incr<0){
    for(i=end; i<=start; i-=incr){
      arr.unshift(i);
    }
  }
  return arr;
};

var sum = function(x){
  var sum=0;
  for(i=0; i<x.length; i++){
    sum+=x[i];
  }
  return sum;
};

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

->//Reversing an Array//
var reverseArray = function(x){
  var newarr = [];
  for(i=0; i<x.length; i++){
    newarr.unshift(x[i]);
  }
  return newarr;
};
var reverseArrayInPlace = function(x){
  for(i=0; i<(x.length)/2; i++){
    var swap = x[i];
    x[i] = x[x.length-1-i];
    x[x.length-1-i] = swap;
  }
  return x;
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

->//A List//
var arrayToList = function(x){
  var list = null; //rest: becomes null at the end because nothing else to set it to
  for(i=x.length-1; i>=0; i--){
    list = {value: x[i], rest: list};
  }
  return list;
};

var listToArray = function(x){
  var arr = [];
  for (var value = x; x; x=x.rest){ //value equals the most current sublist of x. the condition is while x is true. after each iteration, x is set to the rest property (jumping to the new sublist)
    arr.push(x.value);
  }
  return arr;
}

var prepend = function(element, li){
  var list = {};
  list.value = element;
  list.rest = li;
  return list;
}

var nth = function(list, number){
  if(number===0){
    return list.value;
  }
  else{
    return nth(list.rest, number-1);
  }
}

/*
non recursive version: for(i=0; i<=number; i++){
    val = list.value; 
    list = list.rest;
  }
*/

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20


->//Deep Comparison//
var deepEqual = function(obj1, obj2){
  if(typeof obj1 =="object" && obj1!=null && typeof obj2 =="object" && obj2!==null){
    var keys1 = Object.keys(obj1); //Object.keys returns an array with all the property names
    var keys2 = Object.keys(obj2); //Object.keys returns an array with all the property names
    if(keys1.length !== keys2.length){ //check key length equality
      return false;
    }
    for(var i in obj1){ //iterate over all the keys
      if(deepEqual(obj1[i], obj2[i]) === false){ //check if each values are equal
        return false; //if not we are sad
      }
    }
    return true; //if all are equal happy
  }
  else{
    return obj1 === obj2;
  }
}  

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true