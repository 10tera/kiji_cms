import { Employee } from "../../domain/models/employees/model";
import type { IEmployeeRepository } from "../../domain/models/employees/repository";

export class EmployeeRepository implements IEmployeeRepository {
  async findMany({
    siteId: _siteId,
    status: _status,
  }: Partial<Pick<Employee, "siteId" | "status">>) {
    const employees = [
      {
        id: 1,
        name: "Name",
        siteId: 1,
        joiningDate: new Date("2026-01-01"),
        status: "active",
        isNew: true,
      },
    ] as const satisfies Employee[];

    // 取得したデータをエンティティに変換して返す
    return employees.map((employee) => {
      return new Employee(
        employee.id,
        employee.name,
        employee.siteId,
        employee.joiningDate,
        employee.status,
      );
    });
  }

  async update(_employee: Employee): Promise<void> {}
}
