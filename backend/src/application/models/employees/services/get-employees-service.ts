import type { Employee } from "../../../../domain/models/employees/model";
import type { IEmployeeRepository } from "../../../../domain/models/employees/repository";
import { EmployeeDto } from "../dto";

type GetEmployeesCommand = Partial<Pick<Employee, "siteId" | "status">>;

export class GetEmployeesService {
  // インターフェースを実装したリポジトリをDI (Dependency Injection) する
  constructor(private employeeRepository: IEmployeeRepository) {}

  async execute(command: GetEmployeesCommand) {
    const employees = await this.employeeRepository.findMany(command);

    return employees
      .map((employee) => {
        // プレゼンテーションからエンティティを直接操作してほしくないので、DTO (Data Transfer Object) に詰め替える
        return employee ? new EmployeeDto(employee) : null;
      })
      .filter((employee) => !!employee);
  }
}
