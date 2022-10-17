function getRandom (min, max) {
    return Math.floor(Math.random()*(max-min)+min);
}
// 1.Task#1
const promise1 = new Promise((resolve, reject) => {
    let delay = getRandom(1,5);
    setTimeout(() => {
        return resolve(1);
    }, delay*1000)
});

const promise2 = new Promise((resolve, reject) =>  {
    let delay = getRandom(1,5);
    setTimeout(() => {
        return resolve(2);
    }, delay*1000)
});
const promise3 = new Promise((resolve, reject) => {
    let delay = getRandom(1,5);
    setTimeout(() => {
        return resolve(3);
    }, delay*1000)
});
Promise.race([promise1, promise2, promise3])
    .then(data => {
        console.log(data);
    });

// 2. Task#2
function getNum() {
    return new Promise((resolve, reject) => {
        const num = getRandom(1,5);
        console.log(num);
        setTimeout(() => {
            return resolve(num);
        }, 3000);
    });
}
async function waitNum() {
    const number = await getNum();
    console.log(Math.pow(number, 2));
    return Math.pow(number, 2);
}
waitNum();

// 3.Task#3
function getNumber1() {
    return new Promise((resolve, reject) => {
        const num = getRandom(1,5);
        console.log('1',num);
        setTimeout(() => {
            return resolve(num);
        }, 3000);
    });
}
function getNumber2() {
    return new Promise((resolve, reject) => {
        const num = getRandom(6,10);
        console.log('2',num);
        setTimeout(() => {
            return resolve(num);
        }, 5000);
    });
}
async function getNumbers() {
    const num1 = await getNumber1();
    const num2 = await getNumber2();
    console.log(num1 + num2);
    return num1 + num2;
}
getNumbers();