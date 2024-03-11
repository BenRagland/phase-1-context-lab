/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord([firstName, familyName, title, payPerHour]){
    return { 
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents :[]

    }
}

function createEmployeeRecords(records){
    const recordObjList = []
    records.forEach((record)=>{
        recordObjList.push(createEmployeeRecord(record))
    })
    return recordObjList
}

function createTimeInEvent(time){
    return{
        type:"TimeIn",
        hour:time.slice(-4 , time.length),
        date:time.slice(11)
    }
}

function createTimeoutEvent(){}
function hoursWorkedOnDate(){}
function wagesEarnedOnDate(){}

function findEmployeeByFirstName(){}
function calculatePayroll(){}