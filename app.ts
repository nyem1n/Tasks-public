// function logName(name : string) {
//     console.log(name);
// }

// logName('shin');

// let student = {
//     name : 'hyemin',
//     course : 'typescript',
//     score : 100,
//     grade : function(){
//         console.log('A');
//     }
// }

// student.name = 'shin';

// 변수의 데이터 타입 명시
let stdId : number = 1111;
let stdName : string = 'shin';
let age : number = 24;
let gender : string = 'female';
let course : string = 'typescript';
let completed : boolean = false;

//열거형 : 사용자 정의 타입
enum GenderType {
    Male = 'male',
    Female = 'female',
    GenderNeutral = 'nue'
}

interface Student{
    stdId : number;
    stdName? : string;
    age? : number;
    gender? : 'male' | 'female';
    course? : string;
    completed? : boolean;
    // setName( name: string) : void;
    // setName : ( name: string) => void;
    // getName : () => string;
}

class MyStudent implements Student{
    stdId = 2202;
    stdName = 'shin';
    age = 30;
    gender : 'male' | 'female' = 'female';
    course = 'node.js';
    completed = true

    setName(name : string) : void{
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    }
}

const myInstance = new MyStudent();
myInstance.setName('엘리스');

function getInfo(id : number) : Student {
    return {
        stdId : id,
        stdName : 'shin',
        age : 24,
        gender : GenderType.Female,
        course : 'javascript',
        completed : true
    };
}

let std = {
    stdId : 2202,
    stdName : 'shin',
    age : 30,
    gender : 'male',
    course : 'node.js',
    completed : true
}

// function setInfo(student : Student) :void {
//     console.log(student);
// }

// setInfo(std);

// console.log(getInfo(5678));

// 함수의 데이터 타입 명시(매개변수, 리턴 타입)
// function Plus(a : number, b : number) : void {
//     return a + b;
// }

// const user : {name : string, age : number} = {
//     name : 'john',
//     age : 25
// };

// type strOrNum = string | number;

// let numStr : strOrNum = 100;
// let item : number;

// function convertToString(val : strOrNum) : string {
//     if(typeof val === 'string') {
//         item = 0;
//     } else {
//         item = val;
//     }
//     return String(val);
// };

// function convertToNumber(val : strOrNum) : number {
//     return Number(val);
// };

// console.log(convertToString(numStr));
// console.log(convertToNumber(numStr));

// let numbers : number[] = [1, 2, 3, 4, 5];

// let fruits : string[] = ['apple', 'banana', 'orange'];

// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// };

// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// };

// let mixedArray : (number | string)[] = [1, 'two', 3, 'four'];

// for(let i = 0; i < mixedArray.length; i++) {
//     console.log(mixedArray[i]);
// };

// let infer = [1, 2, 3];

// for(let i = 0; i < infer.length; i++) {
//     console.log(infer[i]);
// };

// let readonly : ReadonlyArray<number> = [1, 2, 3];

// // 튜플
// let greeting : [number, string, boolean] = [1, 'hello', true];

// for(let i = 0; i < greeting.length; i++) {
//     console.log(greeting[i])
// };

// // spread 연산자

// let firstArray = [1, 2, 3];
// let secondArray = [4, 5, 6];

// let combineArray = [...firstArray, ...secondArray];

// for(let i = 0; i < combineArray.length; i++) {
//     console.log(combineArray[i])
// };

