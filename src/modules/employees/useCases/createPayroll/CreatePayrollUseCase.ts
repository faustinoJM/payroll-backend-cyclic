// import { inject, injectable } from "tsyringe";
// import { ICreateUserDTO } from "../../../accounts/dtos/ICreateUserDTO";
// import { IUsersRepository } from "../../../accounts/repositories/IUsersRepository";
// import { hash } from "bcryptjs";
// import AppError  from "../../../../shared/errors/AppError";
// import { IEmployeesRepository } from "../../repositories/IEmployeesRepository";

// interface IRequest {
//     name: string;
// }

// interface ISalario {
//   salarioLiquido?: number;
//   coeficiente: number;
//   limiteNTributavel: number;
//   AResult?: number;
//   AxB?: number;
//   valorReter?: number;
//   impostoPagar?: number;
// }

// @injectable()
// class CreatePayrollUseCase {

//     constructor(@inject("EmployeesRepository")
//         private employeeRepository: IEmployeesRepository) {}

//     async execute({ name }: IRequest) {
        
//         const employee = await this.employeeRepository.findByName(name);

//         if(!employee) {
//             throw new AppError("Employee Doesn't Exists");
//         }
//         const sss = 20250;

//         const salario: ISalario = {
//           coeficiente:  CalcCoeficiente(sss, employee.dependents),
//           limiteNTributavel: CalcLimiteNaoTributavel(sss, employee.dependents),
//           AResult: sss - CalcLimiteNaoTributavel(sss, employee.dependents),
//           AxB: (sss - CalcLimiteNaoTributavel(sss, employee.dependents)) * CalcCoeficiente(sss, employee.dependents),
//           valorReter: CalcValorReter(CalcLimiteNaoTributavel(sss, employee.dependents), 4),
//           impostoPagar: calcImpostoPagar(((sss - CalcLimiteNaoTributavel(sss, employee.dependents)) * CalcCoeficiente(sss, employee.dependents)),
//                                   CalcValorReter(CalcLimiteNaoTributavel(sss, employee.dependents), 4)),
//           salarioLiquido: calcSalario(sss, calcImpostoPagar(((sss - CalcLimiteNaoTributavel(sss, employee.dependents)) * CalcCoeficiente(sss, employee.dependents)),
//           CalcValorReter(CalcLimiteNaoTributavel(sss, employee.dependents), 4)))

//         }
                 
//         // employee.salary = CalcCoeficiente(50000, employee.dependents)
//         // employee.employee_id = CalcLimiteNaoTributavel(50000, employee.dependents)
//     //     employee.salary = (salario.salarioLiquido)
//     //     return {
//     //       employee,
//     //       salario
//     //     };
//     // }
// }

// function CalcCoeficiente (salary: number, dependents: number) {
//   if (salary <= 20249.99) 
//     return 0;
//     if (salary >= 20250 && salary < 20750)
//       return 0.1;
//       if (salary >= 20750 && salary < 21000)
//         return 0.1;
//         if (salary >= 21000 && salary < 21250)
//           return 0.1;
//           if (salary >= 21250 && salary < 21750)
//             return 0.1;
//             if (salary >= 21750 && salary < 22250)
//               return 0.1;
//               if (salary >= 22250 && salary < 32750)
//                 return 0.15;
//                 if (salary >= 32750 && salary < 60750)
//                   return 0.2;
//                   if (salary >= 60750 && salary < 144750)
//                     return 0.25;
//                     if (salary <= 144750)
//                       return 0.32;
//                       if (salary > 144750)
//                         return 0.32;
  
//    return salary * dependents
// }

// function CalcLimiteNaoTributavel(salary: number, dependents: number) {
//   if (salary <= 20249.99) 
//     return 20249.99;
//     if (salary >= 20250 && salary < 20750)
//       return 20250;
//       if (salary >= 20750 && salary < 21000)
//         return 20750;
//         if (salary >= 21000 && salary < 21250)
//           return 21000;
//           if (salary >= 21250 && salary < 21750)
//             return 21250;
//             if (salary >= 21750 && salary < 22250)
//               return 21750;
//               if (salary >= 22250 && salary < 32750)
//                 return 22250;
//                 if (salary >= 32750 && salary < 60750)
//                   return 32750;
//                   if (salary >= 60750 && salary < 144750)
//                     return 60750;
//                     if (salary <= 144750)
//                       return 144750;
//                       if (salary > 144750)
//                         return 144750;
  
//   return salary * dependents
// }

// function CalcValorReter(LimiteNTributavel: number, dependents: number) {
//   if (LimiteNTributavel == 20249.99) 
//     return 0;
//     if (LimiteNTributavel == 20250)
//       return 0;
//       if (LimiteNTributavel == 20750) {
//         if(dependents == 0)
//           return 50;
//         else 
//           return 0
//         } 
//         if (LimiteNTributavel == 21000) {
//           if(dependents == 0)
//             return 75;
//           if(dependents == 1)
//             return 25;
//           else 
//             return 0;
//         }
//           if (LimiteNTributavel == 21250) {
//             if(dependents == 0)
//               return 100;
//             if(dependents == 1)
//               return 50;
//             if(dependents == 2)
//               return 25;
//             else 
//               return 0;
//           }
//             if (LimiteNTributavel == 21750) {
//               if(dependents == 0)
//                 return 150;
//               if(dependents == 1)
//                 return 100;
//               if(dependents == 2)
//                 return 75;
//               if(dependents == 3)
//                 return 50;
//               else 
//                 return 0;
//             }
//               if (LimiteNTributavel == 22250) {
//                 if(dependents == 0)
//                 return 200;
//                 if(dependents == 1)
//                   return 150;
//                 if(dependents == 2)
//                   return 125;
//                 if(dependents == 3)
//                   return 100;
//                 if(dependents == 4)
//                   return 50;
//                 else 
//                   return 50;
//               }
//                 if (LimiteNTributavel == 32750) {
//                   if(dependents == 0)
//                   return 1775;
//                   if(dependents == 1)
//                     return 1725;
//                   if(dependents == 2)
//                     return 1700;
//                   if(dependents == 3)
//                     return 1675;
//                   if(dependents == 4)
//                     return 1625;
//                   else 
//                     return 1625;
//                 }
//                   if (LimiteNTributavel == 60750) {
//                     if(dependents == 0)
//                     return 7375;
//                     if(dependents == 1)
//                       return 7325;
//                     if(dependents == 2)
//                       return 7300;
//                     if(dependents == 3)
//                       return 7275;
//                     if(dependents == 4)
//                       return 7225;
//                     else 
//                       return 7225;
//                   }
//                     if (LimiteNTributavel == 144750) {
//                       if(dependents == 0)
//                         return 28375;
//                       if(dependents == 1)
//                         return 28325;
//                       if(dependents == 2)
//                         return 28300;
//                       if(dependents == 3)
//                         return 28275;
//                       if(dependents == 4)
//                         return 28225;
//                       else 
//                         return 28225;
//                     }
//   return  99999
// }

// function calcImpostoPagar(axb: number, valorReter: number) {
//   return axb + valorReter
// }

// function calcSalario(salario: number, IRPS: number) {
//   return salario - IRPS - (salario * 0.03);
// }

// export { CreatePayrollUseCase }




//       // function CalcCoeficiente (salary: number, dependents: number) {
//       //   if (salary <= 20249.99) 
//       //     return 0;
//       //     if (salary <= 20250)
//       //       return 0.1;
//       //       if (salary <= 20750)
//       //         return 0.1;
//       //         if (salary <= 21000)
//       //           return 0.1;
//       //           if (salary <= 21250)
//       //             return 0.1;
//       //             if (salary <= 21750)
//       //               return 0.1;
//       //               if (salary <= 22250)
//       //                 return 0.15;
//       //                 if (salary <= 32750)
//       //                   return 0.2;
//       //                   if (salary <= 60750)
//       //                     return 0.25;
//       //                     if (salary <= 144750)
//       //                       return 0.32;
//       //                       if (salary > 144750)
//       //                         return 0.32;
        
//       //   return salary * dependents
//       // }


// // function CalcCoeficiente (salary: number, dependents: number) {
 
// //   return salary * dependents
// // }