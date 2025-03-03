class EmployeePayrollData{
    // property 
    id;
    salary;
    gender;
    startDate;
    // constructor

    constructor(...params){
      this.id = params[0];
      this.name = params[1];
      this.salary = params[2];
      this.gender = params[3];
      this.startDate = params[4];
    }

    // getter and sette method

    get name() {
        return this.name;
    }
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}{a-z}{3,}$');
        if(nameRegex.test(name)){
            this.name = name;
        } else throw "Name is Incorrect!";
       
    }

    // method 
    toString(){
        const options = {year : 'numeric' , month: 'long' , day : 'numeric'};
        const empDate = this.startDate === undefined ? "undefined":
                       this.startDate.toLocalDateString("en-US" , options);

        return "id= " + this.id + " , name=" + this.name + ", salary=" + this.salary + " ," + "gender = " + this.gender + " , startDate= " + empDate;               
    }

    
}

let EmployeePayrollData = new EmployeePayrollData(1 , "Mark" , 30000);
console.log(EmployeePayrollData.toString());
try{
    EmployeePayrollData.name = "john";
    console.log(EmployeePayrollData.toString());
    
} catch(e){
    console.error(e);
}
let newEmployeePayrollData = new EmployeePayrollData(1 , "Terrisa" , 30000 , "F" , new Date());
console.log(newEmployeePayrollData.toString());