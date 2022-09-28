// 1.  Task #1
let str = '123456';
if ((+str[0]+ +str[1]+ +str[2])===(+str[3]+ +str[4]+ +str[5]))
    {
    console.log("Да");
    }
    else
    {
        console.log("Нет");
    };
//2. Task #2
let n = 1000;
let num = 0;
while (n>50)
    {
        num++;
        n = n/2;
    };
console.log("Получилось число: " + n);
console.log("Количество итераций: " + num);
//3. Task #3
let arr = [12,15,20,25,59,79];
let sum = 0;
let res;
for (let i = 0; i<arr.length; i++)
    {
        sum = sum + arr[i];
        res = sum/arr.length;
    };
console.log("Среднеарифметическое значение: " + res);
//4. Task #4
let arr1 = [1,2,3,4,5];
arr1.splice(3,0,'a','b','c');
console.log(arr1);
//5. Task #5
let arr2 = [1,2,3,4,5];
let arr3 = arr2.splice(1,0,'a','b');
let arr4 = arr2.splice(6,0,'c');
let arr5 = arr2.splice(8,0,'e');
console.log(arr2);
//6. Task #6
let arr6 = [3,4,1,2,7];
let arr7 = arr6.sort();
console.log(arr7);
