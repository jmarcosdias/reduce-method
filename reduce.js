  
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
  },
  {
    name: 'Michael',
    profession: 'Solicitor',
    yrsExperience: 25
  }
];

// Totaling a specific object property

let totalYears = teamMembers.reduce( (arr, curr) => arr + curr.yrsExperience, 0);
console.log('Total Years:', totalYears);

// Grouping by a property, and totaling it too

// We're going to use reduce to group team members by profesion and find total experience for each profesion

let yearsPerProfession = teamMembers.reduce( (acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
},{});

console.log(yearsPerProfession);
