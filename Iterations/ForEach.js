const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
var wantFruits;
fruits.forEach(wantFruits => console.log('I want to eat a '+wantFruits));

/* Same result */
function printFruit(fruitName){
  console.log('I want to eat a '+fruitName);
}

fruits.forEach(printFruit);
