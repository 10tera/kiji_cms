import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import z from "zod";
import { GetEmployeesService } from "../../../application/models/employees/services/get-employees-service";
import { EmployeeRepository } from "../../../infrastructure/employees";

export const testRoute = new Hono().get(
  "/test",
  zValidator("query", z.object({})),
  async (c) => {
    const service = new GetEmployeesService(new EmployeeRepository());
    const employees = await service.execute({});
    return c.json(employees, 200);
  },
);
