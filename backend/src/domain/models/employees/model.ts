type EmployeeStatus = "active" | "inactive";

export class Employee {
  constructor(
    public id: number,
    public name: string,
    public siteId: number,
    public joiningDate: Date,
    public status: EmployeeStatus,
  ) {}

  // 入社30日以内は新人とみなすビジネスロジック
  public get isNew(): boolean {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    return this.joiningDate > thirtyDaysAgo;
  }
}
