//1. Task #1
function arr(){
    let a = [1, 2, 3, 4, 5, 6];
    a.reverse();
    console.log(a);
}
arr();

// 2. Task#2
let arr1 = [3, 67, 15, -78, 89, 1243, 2000, 500];
arr1.sort(function(a, b){return a - b});
console.log("Максимальное значение числа в массиве: " + arr1[arr1.length - 1]);

// 3. Task#3
function fib(n, a, b) {
    let arr4 = [a, b];
    for (let i = 2; i < n; i++) {
        arr4[i] = arr4[i - 2] + arr4[i - 1];
    }
    return arr4;
}
console.log(fib(5, 1, 2));

// 4. Task#4
function same(n1, n2) {
    let s1 = n1.toString();
    let s2 = n2.toString();
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] === s2[j]) {
                count++;
            }
        }
    }
    return count;
}
function same1(n1, n2) {
    let s1 = n1.toString();
    let s2 = n2.toString();
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] === s2[j] && i===j) {
                count++;
            }
        }
    }
    return count;
}
console.log("Количество цифр, совпадающих по значению: " + same(3487, 3794));
console.log("Количество цифр, совпадающих по значению и позициии: " + same1(3487, 3794));

// 5. Task#5
let arr5 = [102,25,13,47];
function sortUp(n1,n2) {
    return n1-n2;
}
function sortDown(n1,n2) {
    return n2-n1;
}
console.log("Отсортированный массив по возрастанию: " + arr5.sort(sortUp));
console.log("Отсортированный массив по убыванию: " + arr5.sort(sortDown));

// 6. Task#6
const arr6 = [0,1,2,0,0,3];
const newarr = arr6.filter(function(item, index){
    console.log(item, index, arr6.indexOf(item), arr6.indexOf(item)===index);
    return arr6.indexOf(item)===index
});
console.log(newarr);
