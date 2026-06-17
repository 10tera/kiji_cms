import { getCloudflareContext } from "@opennextjs/cloudflare";
import { createDb } from "../../../../db/index";
import type { Employee } from "../../domain/models/employees/model";
import type { IEmployeeRepository } from "../../domain/models/employees/repository";

export class EmployeeRepository implements IEmployeeRepository {
  private get db() {
    const { env } = getCloudflareContext();
    return createDb(env.DB);
  }

  async findMany({
    siteId: _siteId,
    status: _status,
  }: Partial<Pick<Employee, "siteId" | "status">>) {
    // TODO: implement using this.db
    return [];
  }

  async update(_employee: Employee): Promise<void> {}
}
