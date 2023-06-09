import { ISalario } from "../useCases/createPayroll/CreatePayrollUseCase";
import { IPayrollDemo } from "../useCases/listPayroll/ListPayrollUseCase";


interface ICreatePayrollDTO2 {
  id?: string;
  employee_uid?: string;
  employee_id?: number;
  employee_name?: string;
  dependents?: number;
  position_name?: string;
  departament_name?: string;
  nib?: number;
  salary_base?: string;
  salary_liquid?: string;
  month?: string;
  year?: number;
  overtime50?: number;
  overtime100?: number;
  total_overtime?: string;
  month_total_workdays?: number;
  day_total_workhours?: number;
  base_day?: string;
  base_hour?: string;
  absences?: number;
  total_absences?: string;
  cash_advances?: string;
  backpay?: string;
  bonus?: string;
  subsidy?: string;
  irps?:  string;
  inss_employee?: string;
  inss_company?: string;
  total_inss?: string;
  total_income?: string;
  total_salary_liquid?: string;
  total_salary_base?: string;
  tabelaSalario?: ISalario;
  payrollDemo?: IPayrollDemo;
}

export { ICreatePayrollDTO2 };