const array = [{
    id: 'qwe',
    name: 'andrew',
    age: 22
  },
  {
    id: 'sdf',
    name: 'kostya',
    age: 26
  },
  {
    id: 'fhgde',
    name: 'milan',
    age: 32
  },
  {
    id: 'hjfke',
    name: 'robert',
    age: 19
  }
];

// const dataFromArray = array.reduce((acc, value) => {
//   return {
//     ...acc,
//     [value.id]: {
//       name: value.name[0].toUpperCase() + value.name.slice(1),
//       age: value.age
//     }
//   }
// }, {});

const dataFromArray = array.reduce((acc, value) => {
  acc[value.id] = {
    name: value.name[0].toUpperCase() + value.name.slice(1),
    age: value.age
  }
  return acc;
}, {});

console.log(dataFromArray);

// const dataFromArray = {
//   qwe: {
//     name: 'Andrew',
//     age: 22
//   },
//   sdf: {
//     name: 'Kostya',
//     age: 26
//   },
//   fhgde: {
//     name: 'Milan',
//     age: 32
//   },
//   hjfke: {
//     name: 'Robert',
//     age: 19
//   }
// };

// console.log(dataFromArray);