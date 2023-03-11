import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePayrollUseCase } from "./CreatePayrollUseCase";

class CreatePayrollController {

    async handle(request: Request, response: Response) {
        const { 
              // employee_id,
              month,
              year,
              overtime50,
              overtime100,
              month_total_workdays,
              day_total_workhours,
              absences,
              cash_advances,
              backpay,
              bonus,
              } = request.body;

        const createPayrollUseCase = container.resolve(CreatePayrollUseCase);

        const payrolls = await createPayrollUseCase.execute({ 
                month,
                year,
                overtime50,
                overtime100,
                month_total_workdays,
                day_total_workhours,
                absences,
                cash_advances,
                backpay,
                bonus,
                })

        return response.json(payrolls);
    }
}

export { CreatePayrollController }