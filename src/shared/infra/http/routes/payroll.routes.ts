import { Router } from "express";
import { CreatePayrollController } from "../../../../modules/payrolls/useCases/createPayroll/CreatePayrollController";
import { DeletePayrollController } from "../../../../modules/payrolls/useCases/deletePayroll/DeletePayrollController";
import { InputPayrollController } from "../../../../modules/payrolls/useCases/inputPayroll/InputPayrollController";
import { ListPayrollController } from "../../../../modules/payrolls/useCases/listPayroll/ListPayrollController";
import { OutputPayrollController } from "../../../../modules/payrolls/useCases/outputPayroll/OutputPayrollController";
import { SinglePayrollController } from "../../../../modules/payrolls/useCases/singlePayroll/SinglePayrollController";

const payrollRouter = Router();
const createPayrollController = new CreatePayrollController();
const listPayrollController = new ListPayrollController()
const outputPayrollController = new OutputPayrollController();
const inputPayrollController = new InputPayrollController();
const singlePayrollController = new SinglePayrollController()
const deletePayrollController = new DeletePayrollController()

payrollRouter.post("/", createPayrollController.handle);
payrollRouter.get("/", outputPayrollController.handle);
payrollRouter.get("/:id", singlePayrollController.handle);
payrollRouter.put("/:id", inputPayrollController.handle);
// payrollRouter.post("/", listPayrollController.handle)
payrollRouter.post("/zz", deletePayrollController.handle)


export { payrollRouter };
