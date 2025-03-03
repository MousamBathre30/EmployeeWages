
// uc 1
// checking the employe present or not 
const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random() * 10) % 2  ;

if(empCheck  == IS_ABSENT){
    console.log("Employee is Absent");
    return;
} else{
    console.log("Employee is PRESENT");
}

// UC-2
// assigning the variable
const IS_PART_TIME = 1 ;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;



// adding switch statemnt for checking the emphrs
function getWorkingHours(empCheck){
switch (empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
    default:
        empHrs = 0;
        break;
  }
}

// UC 4
const NUM_OF_WORKING_DAYS = 20;
let empHrs = 0;
for(let day = 0; day < NUM_OF_WORKING_DAYS; day++){
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: " + empWage);


// UC 6

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

const MAX_HRS_IN_MONTH = 160;
const NUM_OF_WORKING_DAYS_ = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3 ;
    totalEmpHrs += getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}
let empWage_for_Condition = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC-6 - Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wags : " + empWage);























