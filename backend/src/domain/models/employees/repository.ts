import type { Employee } from "./model";

export interface IEmployeeRepository {
  findMany: ({
    siteId,
    status,
  }: Partial<Pick<Employee, "siteId" | "status">>) => Promise<Employee[]>;
  update(employee: Employee): Promise<void>;
}
