import { inject, injectable } from "tsyringe";
import AppError  from "../../../../shared/errors/AppError";
import ICreateSettingDTO from "../../dtos/ICreateSettingDTO";
import ISettingRepository from "../../repositories/ISettingRepository";


@injectable()
class CreateSettingUseCase {

    constructor(@inject("SettingsRepository")
        private settingRepository: ISettingRepository) {}

    async execute(data: ICreateSettingDTO) {
        
        data.flag_id = 1
        const settingAlreadyExists = await this.settingRepository.findById(data.flag_id as number);
        
        if(settingAlreadyExists) {
        // throw new AppError("Setting Already Exists");
            await this.settingRepository.create({
              id: settingAlreadyExists.id,
              company_name: data.company_name, 
              company_telephone: data.company_telephone,
              company_contact: data.company_contact,
              company_email: data.company_email,
              company_website: data.company_website,
              company_fax: data.company_fax,
              company_address: data.company_address,
              company_province: data.company_province,
              company_city: data.company_city,
              postal_code: data.postal_code,
              company_country: data.company_country,
              company_avatar: data.company_avatar,
              payroll_total_workdays_month: data.payroll_total_workdays_month,
              payroll_total_workhours_day: data.payroll_total_workhours_day
            });
        } else {
          await this.settingRepository.create(data);
        }

    }
}

export { CreateSettingUseCase }