// array iteration
let fruits = ['mango', 'apple', 'banana', 'grape'];
for (let i = 0; i < fruits.length; i++){
    // console.log(fruits[i])
}

// using forEach
fruits.forEach((x, j, a) => console.log(x, j, a))

// task - 1
let movies = ['frozen', 'tangled', 'the bad guys'];
for (let i = 0; i < movies.length; i++){
    // document.querySelector('h2').innerText += movies[i];
}

// task - 2
let nums = [1, 2, 6, 3];
nums.forEach((item, index) => {
    nums[index] = item + 3;
})

console.log(nums)

// task - 3
let sum = 0;
nums.forEach((num) => sum += num);
console.log(sum/nums.length)


// task - 4
function mulArrayNums(arr){
    let product = 1;
    arr.forEach(num => (product *= num )); 
    console.log(product);
}

mulArrayNums([10, 20, 30])


// array methods 
let arr = [1, 3, 4, 5];
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift('in search of lost time');
console.log(arr);
arr.pop();
console.log(arr);
arr.push('yuh');
console.log(arr);


// task - 5

// function evenNumsInArr(arr){
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 === 0) newArr.push(arr[i])
//     } console.log(newArr);
// }

function evenNumsInArr(arr){
    let newArr = [];
    arr.forEach((num) => {
        if (num % 2 === 0) newArr.push(num);
    })
    return newArr
}

evenNumsInArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
evenNumsInArr([1, 3, 5, 7, 9]);

