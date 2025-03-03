class EmployeePayrollData{
    // property 
    id;
    salary;

    // constructor

    constructor(id , name , salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // getter and sette method

    get name() {
        return this.name;
    }
    set name(name){
        this.name = name;
    }

    // method 
    toString(){
        return "id=" + this.id + " , name= " + this.name + " , salary= " + this.salary ;
    }

    
}

let EmployeePayrollData = new EmployeePayrollData(1 , "Mark" , 30000);
console.log(EmployeePayrollData.toString());
EmployeePayrollData.name = "john";

console.log(EmployeePayrollData.toString());