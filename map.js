//map


// const numbers = [3, 2, 4, 5, 7, 6];
// const outPut = [];
// for (let i = 0; i< numbers.length; i++) {
//   const element = numbers[i];
//   const result = element * element;
//   outPut.push(result);
//     }
//     console.log(outPut);






// const numbers = [3, 2, 4, 5, 7, 6];
// const result = numbers.map(function square(element) {
//     return element * element;
// })
// console.log(result);


// const numbers = [3, 2, 4, 5, 7, 6];                       // using the Arrow
// const result = numbers.map(element => element * element);
// console.log(result);


const numbers = [3, 2, 4, 5, 7, 6];
const result = numbers.map(x => x * x);
//console.log(result);





//Filter 


const numbers2 = [3, 2, 4, 5, 7, 6];
const bigger = numbers2.filter(x => x > 4);
//console.log(bigger);
//output:[ 5, 7, 6 ]


const numbers3 = [3, 2, 4, 5, 7, 6];
const smaller = numbers3.filter(x => x < 4);
//console.log(smaller);
//output:[ 3, 2 ]




//Find


const numbers4 = [3, 2, 4, 5, 7, 6];
const isThere = numbers4.find(x => x > 4);
//console.log(isThere);
//output: 5



const students = [
    {id: 45, name: 'Asu'},
    {id: 51, name: 'Jeba'},
    {id: 78, name: 'China'},
    {id: 70, name: 'Nym'},
    {id: 71, name: 'Rny'}
   
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger2 = students.filter(s=> s.id > 51);
const findEd = students.find(s=> s.id > 51);
console.log(findEd);