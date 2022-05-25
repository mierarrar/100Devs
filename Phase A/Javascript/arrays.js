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
