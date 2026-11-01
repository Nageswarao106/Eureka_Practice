let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
    { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
];

employees.sort((a, b) => a.eId - b.eId);

console.log(employees);

employees.sort((a, b) => a.name.localeCompare(b.name));
console.log(employees);

let highest = employees[0];
for (let emp of employees) {
    if (emp.sal > highest.sal) {
        highest = emp;
    }
}
console.log('Highest Salary Employee :', highest);

let range = employees.filter ((emp)=>emp.sal>=6000 && emp.sal<=8000);
console.log(range);


employees.forEach((emp) => {
    emp.comp = 'ibm';
});
console.log(employees)


let group = Object.groupBy(employees, (emp) => emp.gender);
console.log (group);

let maleEmp = employees.filter((emp) => emp.gender == 'male');
let totalSalary = maleEmp.reduce((total, emp) => total+ emp.sal,0);
console.log(`Total salary of male employees: ${totalSalary}`);

let genCount = employees.reduce((acc , emp) => {
    acc[emp.gender] = (acc[emp.gender] || 0) + 1;
    return acc;
});
console.log(genCount);

