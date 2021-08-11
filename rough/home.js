// console.log(`Hello!!`)
// alert(`Yooo!!`)

// const name = prompt(`What is your Name?`)
// document.getElementById('someText').innerHTML = `${name}, Read this paragraph!`

// Numbers in Javascript

// let num = 10
// console.log(num)
// // increase num 
// num++
// console.log(num)
// // decrease num 
// num--
// console.log(num)

// // increment or decrement by any num:
// num += 10;
// console.log(num)
// num -= 5;
// console.log(num)


// Functions:

// function fun(){
//     alert("function creation:")
//     const name = prompt(`What is your Name?`)
//     document.getElementById('someText').innerHTML = `${name}, You are calling a function to use your name!`
// }

// fun()

// function greetings(yourName){
//     console.log(`Your Name is : ${yourName}`)
// }

// const name = prompt(`What is your Name?`)
// greetings(name)

// =====================================================

// While Loop

// let whileNum = 00

// while(whileNum<100){
    //     whileNum +=1;
    //     console.log(`At moment num is : ${whileNum}`)
    // }
    
// =====================================================

// For Loop :

// for(let forNum = 0 ; forNum<100; forNum++){
//     console.log(`ForNum at the moment is : ${forNum + 1}`)
// }

// =====================================================

// // Data Types :
// let year = 2021 // number
// let name  = `VaibhaV` //string
// let fullName = { firstName:"VaibhaV", lastName: "Arde"} //object
// let truth = false // boolean
// let groceries = ['apple', 'banana', 'oranges'] // array
// let random; //undefined
// let nothing = null //value null

// =====================================================

// // Strings in Javascript:
// let fruit = 'banana';
// let moreFruit = 'banana\napple'; // new line
// console.log(moreFruit);

// console.log(fruit.length); // 6
// console.log(fruit.indexOf('nan')); // 2
// console.log(fruit.slice(2,4)); //nana
// console.log(fruit.replace('an', 12))
// // console.log(fruit.replaceAll('an', '12'))//this work in browser but says not a function in node
// const search = ' ';
// const replaceWith = '-';
// const result = 'duck duck go'.split(search).join(replaceWith);
// console.log(result); // => 'duck-duck-go'
// console.log(fruit.toUpperCase())
// console.log(fruit.toLowerCase())
// console.log(fruit.charAt(2))
// console.log(fruit[2])

// =====================================================

// // array
// let fruits = ['apple', 'banana', 'oranges']
// fruits = new Array ('apple', 'banana', 'oranges', 'pineapples')

// console.log(fruits[2]) //access value at index 2

// fruits[0] = "pear"
// console.log(fruits)

// for (let i =0; i< fruits.length; i++){
//     console.log(fruits[i])
// }

// // Array common methods:
// console.log('array to string ; ', fruits.toString())
// console.log(fruits.join(' - '))
// console.log(fruits.pop(), fruits) // removes last item
// console.log(fruits.push('mangoes'), fruits) // appends after last item
// console.log(fruits.shift(), fruits) // removes first item
// console.log(fruits.unshift('berry'), fruits) // appends before first item
// let vegetables = ['potato', 'tomato', 'broccoli']
// let allGroceries = fruits.concat(vegetables)
// console.log(allGroceries)
// console.log(allGroceries.slice(1,4))
// console.log(allGroceries.reverse())
// console.log(allGroceries.sort())

// let someNumbers = [2, 5, 18, 3566, 2928, 100]
// console.log(someNumbers.sort()) // [ 100, 18, 2, 2928, 3566, 5 ]
// console.log(someNumbers.sort((a, b) => a-b)) //ascending [ 2, 5, 18, 100, 2928, 3566 ]
// console.log(someNumbers.sort((a, b) => b-a)) //descending [ 3566, 2928, 100, 18, 5, 2 ]

// let emptyArray = new Array();
// for(let num = 0; num<10; num++){
//     emptyArray.push(num+1)
// }
// console.log(emptyArray)

// =====================================================

// Objects in Javascript: /dictionaries in Python

// let student = {
//     fname : 'VaibhaV',
//     lname : 'Arde',
//     age : 34,
//     height : 176,
//     fullName : function (){return `${this.fname}\n${this.lname}\n${this.age}\n${this.height}`}
// }

// console.log(student.fname)
// student.fname = 'Sheetal'
// console.log(student.fullName())

// =====================================================

// COnditionals, Control flows (if else ):
// && AND , || OR

// const age = prompt(`What is your Age?`)

// if (( age >= 18 ) && (age <=35)){
//     status = 'Targeted Audience'
//     console.log('Status : ', status)
// }else{
//     status = 'Not my Audience'
//     console.log('Status : ', status)

// }

// =====================================================
// Switch Statements:
// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
// console.log(`Today is ${day}`)

// =====================================================

// JSON :
// JSON is Javascript Object Notation used as light weight data carrier
// JSON is used to represent Data, mostly used in API's 
// JSON is an array with object's inside it.

// let students = `[
//     {
//         "name":"VaibhaV",
//         "age": 34,
//         "height": 176
//     },
//     {
//         "name":"Sheetal",
//         "age": 33,
//         "height": 160
//     }
// ]`
// console.log(JSON.parse(students))
// console.log(JSON.parse(students)[0])
// console.log(JSON.parse(students)[0].name)

// =====================================================

// CSS :

// container
// flexbox
// flex-wrap : wrap
// justify-content : space-around 