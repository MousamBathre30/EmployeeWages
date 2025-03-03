
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
let empDailyWageMap = new Map();

// UC - 7 Array UC - 8 MAP 
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3 ;
    totalEmpHrs += getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageArr.set(totalWorkingDays , calcDailyWage(empHrs));
}



let empWage_for_Condition = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC-6 - Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wags : " + empWage);


let totEmpWage = 0;

function sum(dailyWage){
    totEmpWage += dailyWage;
}

empDailyWageArr.forEach(sum);

console.log("UC7A - Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Eage: "+ totEmpWage);

function totalWages(totalWage , dailyWage){
    return totalWage + dailyWage;
}

console.log("UC7A - Emp Wage with reduce : " + empDailyWageArr.reduce(totalWages , 0));

let dailyCntr = 0;

function mapDayWithWage(dailyWage){
    dailyCntr ++ ;
    return dailyCntr + " = " + dailyWage ;
}

let mapDayWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWageArr);

// UC 7C - show Days when Full time wage of 160 were earjec 

function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}

let fullDayWageArr = mapDayWageArr.filter(fulltimeWage);
console.log("UC7c - Daily wage Filter when Fulltime Wage Earned");
console.log(fullDayWageArr);


// UC 7D - Find the first occurrence when Full Time Wage was earned using find function

function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

console.log("UC-7D - First time fulltime wage was earned on Day: " + mapDayWageArr.find(findFullTimeWage));

// UC-7E - check if every eleent of full time wage is truely holding full time wage 

function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

console.log("UC 6E - Check all element have full time wage: " + fullDayWageArr.every(isAllFullTimeWage));

// UC - 7G find the number of days the employee worked

function totalDaysWorked(numsOFdays , dailyWage){
    if(dailyWage > 0) return numsOFdays+1;
    return numsOFdays;
}

console.log("UC 7G - Number of Days Emp Worked: " + empDailyWageArr.reduce(totalDaysWorked,0));


console.log(empDailyWageMap);

console.log("UC7A - Emp Wage Map totalHRs: " + Array.from(empDailyWageMap.values()).reduce(totalWages,0));


// UC 9 Arrow Functions 

const findTotal = (totalVal , dailyVal) => {
    return totalVal + dailyVal;
}

let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal,0);

console.log("UC 9A - Emp Wage With Arrow: " + "Total Hours: "+ totalHours + " Total WAges: " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

empDailyHrsMap.forEach((value,key,map) => {
    if(value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log ("Full Working Days: " + fullWorkingDays);
console.log("Part time working days " + partWorkingDays);
console.log("Non Working Days: " + nonWorkingDays);












