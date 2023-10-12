var fruits = ['apple', 'banana', 'orange']
console.log(fruits);

var indexOfBanana = fruits.indexOf('banana');
// console.log(indexOfBanana);
fruits[1] = 'mango';
console.log(fruits);

var removeFruit = fruits.pop();
console.log(fruits);

fruits.push('watermelon');
console.log(fruits);

/*node task1.js[answer]
[ 'apple', 'banana', 'orange' ]
[ 'apple', 'mango', 'orange' ]
[ 'apple', 'mango' ]
[ 'apple', 'mango', 'watermelon' ] */