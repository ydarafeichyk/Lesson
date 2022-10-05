// 1. Task #1 - Dice game
let player1Points = 0;
let player2Points = 0;
for (let i = 0; i<3; i++){
    let side = Math.floor((Math.random()*6)+1);
    player1Points = player1Points + side;
}
console.log("Сумма трех бросков первого игрока равна: " + player1Points);
for (let i = 0; i<3; i++){
    let side1 = Math.floor((Math.random()*6)+1);
    player2Points = player2Points + side1;
}
console.log("Сумма трех бросков второга игрока равна: " + player2Points);
if (player1Points>player2Points) {
    console.log ("Первый игрок выйграл со счетом " + player1Points + ":" + player2Points);
}
else if (player2Points>player1Points) {
    console.log ("Второй игрок выйграл со счетом " + player2Points + ":" + player1Points);
}
else {
    console.log("Ничья" + player2Points + ":" + player1Points);
}

//2. Task #2 - Number of Friday
let date = new Date (Date.UTC("2000", "0", "1"));
let date1 = new Date(Date.UTC("2022", "9", "2"));
let friday = 0;
while (date.getTime() < date1.getTime()) {
    if (date.getDate() === 13 && date.getDay() === 5){
        friday ++;
    }
    date.setDate(date.getDate()+1);
}
console.log("Общее количество пятниц 13-х за период с 2000 года: " + friday);

//3. Task #3 a - Split the number into integer random numbers
// First option
let digit = 20;
let iterations = 3;
let arr = [];
let rem = digit;
for (let i = 1; i <= iterations; i++) {
    if (i === iterations){
        arr.push(rem);
        break;
    }
    let arr1 = Math.round(Math.random()*rem);
    arr.push(arr1);
    rem -= arr1;
}
console.log(arr);

// Second option
let n = 200;
let p = 5;
let minNum = 0;
let frag = n/p;
let fragArr = [];
for (let i = 0; i < p; i ++) {
    fragArr[i] = frag;
}
let addArr = [];
for (let i = 1; i < p; i ++) {
    addArr[i] = Math.floor(Math.random()*(frag - minNum));
    fragArr[i] -= addArr[i];
   }
fragArr[0] = 0;
function getSum(num1, num2) {
    return num1 + num2;
}
let Total = fragArr.reduce(getSum);
fragArr [0] = n - Total;
console.log("Рандомные числа: " + fragArr);

//3. Task #3 b - Split the number into fractional random numbers
// First option
let digit1 = 20;
let iterations1 = 3;
let arr1 = [];
let rem1 = digit1;
for (let i = 1; i <= iterations1; i++) {
    if (i === iterations1){
        arr1.push(rem1);
        break;
    }
    let arr2 = (Math.random()*rem1).toFixed(2);
    arr1.push(arr2);
    rem1 -= arr2;
}
console.log(arr1);

// Second option
let n1 = 30;
let p1 = 4;
let minNum1 = 0;
let frag1 = n1/p1;
let fragArr1 = [];
for (let i = 0; i < p1; i ++) {
    fragArr1[i] = frag1;
}
let addArr1 = [];
for (let i = 1; i < p1; i ++) {
    addArr1[i] = (Math.random()*(frag1 - minNum1)).toFixed(2);
    fragArr1[i] -= addArr1[i];
}
fragArr1[0] = 0;
function getSum1(num3, num4) {
    return num3 + num4;
}
let Total1 = fragArr1.reduce(getSum1);
fragArr1 [0] = n1 - Total1;
console.log("Рандомные числа: " + fragArr1);

