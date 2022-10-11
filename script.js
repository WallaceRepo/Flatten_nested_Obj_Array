// Flatten Array and Object in js
const myArr = [2,3,4,5,[6,7,[8,9,[10]]],45]

function FlattenArr(arr, result = []) {
 if( arr.length === 0) return
   for ( let item of arr) {
         if(!Array.isArray(item)) {
            result.push(item)
         } else {
             FlattenArr(item, result)
         }
     }
  return result
}

 console.log(FlattenArr(myArr))
// [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 45 ]
// Flatten Obj. es6: .flat() and .flatMap() on 

let arr = [1, 2, [3, 4]];

// flat(n) n is the level to flatten. its in ES10
// using .reduce()
arr.reduce((prev, curr) => prev.concat(curr), []);

var myArray = [[1, 2],[3, 4, 5], [6, 7, 8, 9]];

// spread operator ES6
var myNewArray4 = [].concat(...myArray);

console.log(myNewArray4);
[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

/// Flatten deeply nested objects
const obj = { 
  address:  {city: "mabank", 
            street: { 
            name: "McAnally Dr", 
            number: { house: 125 }
          }}}

// Using reduce method

const flattenObject = (obj, prefix = '') =>

  Object.keys(obj).reduce((acc, key) => {
   const pre = prefix.length ? prefix + '.' : '';
     if (typeof obj[key] === 'object') Object.assign(acc, flattenObject(obj[key], pre + key)); 
         else acc[pre + key] = obj[key];
    return acc;
   }, {});
console.log(flattenObject({ a: { b: { c: 1 } }, d: 1 }));
{ 'a.b.c': 1, d: 1 }
// console.log(flattenObject(obj))
// { 'address.city': 'mabank',
//   'address.street.name': 'McAnally Dr',
//   'address.street.number.house': 125 }

const myObj = {
  name: 'John',
  children: [
    {
      name: 'Jim',
      children:[]
    },
    {
      name: 'Zoe',
      children: [
        { name: 'Mary', children: []},
        { name: 'Chad', children:[]}
      ]
    }
  ]
}

function printChildrenRecursive(obj) {
  if(obj.children.length === 0) return;
  obj.children.forEach( child=> {
           console.log(child.name)
           printChildrenRecursive(child)
  })
}

// console.log(printChildrenRecursive(myObj))
// Jim
// Zoe
// Mary
// Chad
// undefined



