const KEYS = {
  employees: "employees",
  employeeId: "employeeId",
};

export const getDeparmentCollection = () => [
  { id: "1", title: "UI/UX Designer" },
  { id: "2", title: "Frontend Developer" },
  { id: "3", title: "Backend Developer" },
  { id: "4", title: "Machine Learning Engineer" },
];

export const insertEmployees = (data) => {
  let employees = getAllEmployees();
  data["id"] = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};

export const updateEmployees = (data) => {
  let employees = getAllEmployees();
  let recordIndex = employees.findIndex((employee) => employee.id == data.id);
  employees[recordIndex] = { ...data };
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};

export const deleteEmployee = (id) => {
  let employees = getAllEmployees();
  employees = employees.filter((employee) => employee.id !== id);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
};

export const generateEmployeeId = () => {
  if (localStorage.getItem(KEYS.employeeId) == null)
    localStorage.setItem(KEYS.employeeId, "0");
  let id = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
};

export const getAllEmployees = () => {
  if (localStorage.getItem(KEYS.employees) == null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  let employees = JSON.parse(localStorage.getItem(KEYS.employees));

  let departments = getDeparmentCollection();

  return employees.map((data) => ({
    ...data,
    department: departments[data.departmentId - 1].title,
  }));
};
