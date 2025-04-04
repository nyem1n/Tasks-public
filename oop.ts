// 일반적인 직원 정보


class Employee {
    constructor(
        private _empName : string, 
        private _age : number, 
        private _empJob : string
    ) {

    }
    get empName() {
        return this._empName;
    }

    set empName(val : string) {
        this._empName
    }

    printEmp = () : void  => {
        console.log(`${this._empName}의 나이는 ${this._age}이고, 직업은 ${this._empJob}입니다.`);
    }
}


let employee1 = new Employee('kim', 24, '개발자');
employee1.printEmp();