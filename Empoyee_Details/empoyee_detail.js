const empoyee_detail = document.getElementById("display_Info");
const salaryCal = document.getElementById("btn_calcSalaries");
const display_HR = document.getElementById("display_HR");
const findEmpoyeeByID = document.getElementById("find_two");
const employeesDetails = document.getElementById("employeesDetails");

const employees = [
  { id: 1, name: "John Doe", age: 30, department: "IT", salary: 50000 },
  { id: 2, name: "Alice Smith", age: 28, department: "HR", salary: 45000 },
  { id: 3, name: "Bob Johnson", age: 35, department: "Finance", salary: 60000 },
  //... More employee records can be added here
];

empoyee_detail.addEventListener("click", () => {
  const total_Emplyee = employees.map(
    (employee) =>
      `<p>$ ID : ${employee.id} : Name ${employee.name} : Department ${employee.department} : Salary${employee.salary} </p>`
  );

  employeesDetails.innerHTML = total_Emplyee;
});
salaryCal.addEventListener("click", () => {
  let totalSalary = 0;
  const totlaSal = employees.reduce((acc, num) => acc + num.salary, 0);
  const total = document.createElement("p");
  total.innerText = `The Total Salary : ${totlaSal}`;
  employeesDetails.appendChild(total);
});
display_HR.addEventListener("click", () => {
  // alert("Hello HR");
  const hrDept = employees.filter((emp) => emp.department === "HR");
  let detail = hrDept.map(
    (emp) =>
      `<p>ID: ${emp.id} Name: ${emp.name} Department: ${emp.department} Salary: ${emp.salary}</p>`
  );
  employeesDetails.innerHTML = detail.join(" ");
});
findEmpoyeeByID.addEventListener("click", () => {
  const findbyID = employees.filter((emp) => emp.id === 2);
  const detailID = findbyID.map(
    (emp) =>
      `<p>ID: ${emp.id} Name: ${emp.name} Department: ${emp.department} Salary: ${emp.salary}</p>`
  );
  employeesDetails.innerHTML = detailID.join(" ");
});
