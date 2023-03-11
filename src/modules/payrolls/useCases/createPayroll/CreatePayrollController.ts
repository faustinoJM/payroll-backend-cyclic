import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePayrollUseCase } from "./CreatePayrollUseCase";

class CreatePayrollController {

    async handle(request: Request, response: Response) {
        const { 
              month,
              year,
              month_total_workdays,
              day_total_workhours,
              } = request.body;

        const createPayrollUseCase = container.resolve(CreatePayrollUseCase);

        const payrolls = await createPayrollUseCase.execute(
                month,
                year,
                month_total_workdays,
                day_total_workhours,
                )

        return response.json(payrolls);
    }
}

export { CreatePayrollController }