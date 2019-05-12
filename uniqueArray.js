
//Array with duplicate elements
let arrayOne = [2, 5, 6, 9, 5];

//Solution 1
let uniqArray1 = (a) => a.filter( (el, i) => a.indexOf(el) === i);

//Solution 2
let uniqArray2 = (a) => {
    let seen = {};
    return a.filter( (el) => seen.hasOwnProperty(el) ? false : seen[el] = true)
}

//Solution 3
//ES6
let uniqArray3 = new Set(arrayOne);

//Output
console.log("uniqArray1 ", uniqArray1(arrayOne));
console.log("uniqArray2 ", uniqArray2(arrayOne));
console.log("uniqArray3 ", uniqArray3);