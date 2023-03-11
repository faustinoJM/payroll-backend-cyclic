// import { Request, Response } from "express";
// import { container } from "tsyringe";
// import { CreatePayrollUseCase } from "./CreatePayrollUseCase";

// class CreatePayrollController {

//     async handle(request: Request, response: Response) {
//         const { name } = request.body;

//         const createUserUseCase = container.resolve(CreatePayrollUseCase);

//         const employee = await createUserUseCase.execute({ name })

//         return response.json(employee);
//     }
// }

// export { CreatePayrollController }