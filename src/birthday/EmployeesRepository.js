import fs from "fs";
import path from "path";
import { Employee } from "./Employee";

export class EmployeesRepository {
  constructor(fileName) {
    this.fileName = fileName;
  }

  getEmployeesByBirthDate(ourDate) {
    const filePath = path.resolve(__dirname, this.fileName);
    const data = fs.readFileSync(filePath, "UTF-8");

    const lines = data.split(/\r?\n/);
    lines.shift(); // Remove header line

    const employees = lines.map(line => this.createEmployeeFromLine(line));
    return employees.filter(employee => employee.isBirthday(ourDate));
  }

  createEmployeeFromLine(line) {
    const [lastName, firstName, birthDate, email] = line.split(", ");
    return new Employee(firstName, lastName, birthDate, email);
  }
}
