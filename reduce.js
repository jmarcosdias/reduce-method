  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];

// acc = accumulator, curr = current value
let sum = nums.reduce( (acc, curr) => acc + curr);
console.log(sum);

let sum2 = nums.reduce( (acc, curr) => {
  console.log(
    'Acculumator', acc,
    'Current Value', curr,
    'Total', acc + curr
  );
  return acc + curr;
}, 100);
console.log(sum2);

let sum3 = nums.reduce( (acc, curr) => acc + curr, 100);
console.log(sum3);

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property


// Grouping by a property, and totaling it too
