//1. Task #1
function changeArray(){
    let a = [1, 2, 3, 4, 5, 6];
    a.reverse();
    console.log(a);
}
changeArray();

// 2. Task#2
let arr1 = [3, 67, 15, -78, 89, 1243, 2000, 500];
arr1.sort(function(a, b){return a - b});
console.log("Максимальное значение числа в массиве: " + arr1[arr1.length - 1]);

// 3. Task#3
function getFibonachi(n) {
    if (n <= 1) {
        return n;
    }
    return getFibonachi(n-1) + getFibonachi(n-2);
}
console.log(getFibonachi(8));
function getFibonachi1(n, m) {
    let fib = getFibonachi(n);
    let arr4 = new Array(m);
    for (let i = 0; i < m; i++, n++) {
        arr4[i] = getFibonachi(n);
    }
    return arr4;
}
console.log(getFibonachi1(8,10));

// 4. Task#4
function findSameNumbers(n1, n2) {
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
function findSameNumbers1(n1, n2) {
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
console.log("Количество цифр, совпадающих по значению: " + findSameNumbers(3487, 3794));
console.log("Количество цифр, совпадающих по значению и позициии: " + findSameNumbers1(3487, 3794));

// 5. Task#5
let points = [102,25,13,47,3];
console.log(points.sort(function(a,b){return a-b}));
console.log(points.sort(function(a,b){return b-a}));

// 6. Task#6
const arr6 = [0,1,2,0,0,3];
const newarr = arr6.filter(function(item, index){
    console.log(item, index, arr6.indexOf(item), arr6.indexOf(item)===index);
    return arr6.indexOf(item)===index
});
console.log(newarr);
