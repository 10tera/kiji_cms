import type { Employee } from "../../../domain/models/employees/model";

export class EmployeeDto {
  public readonly id: number;
  public readonly name: string;
  public readonly siteId: number;
  public readonly joiningDate: string;
  public readonly status: string;

  constructor(employee: Employee) {
    this.id = employee.id;
    this.name = employee.name;
    this.siteId = employee.siteId;
    this.joiningDate = employee.joiningDate.toISOString();
    this.status = employee.status;
  }
}
