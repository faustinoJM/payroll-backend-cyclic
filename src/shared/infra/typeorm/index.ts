import { DataSource} from "typeorm"
import { User } from "../../../modules/accounts/infra/typeorm/entities/User"
import { UserTokens } from "../../../modules/accounts/infra/typeorm/entities/UserTokens"
import Department from "../../../modules/departments/infra/typeorm/entities/Department"
import { Employee } from "../../../modules/employees/infra/typeorm/entities/Employee"
import { Payroll } from "../../../modules/payrolls/infra/typeorm/entities/Payroll"
import Position from "../../../modules/positions/infra/typeorm/entities/Position"


const options:  any = {
     type: "postgres",
    // host: "localhost",
    // port: 5432,
    // username: "postgres",
    // password: "12345",
    // database: "payroll_test",
    url: "postgres://xmfgeufm:45zUoMdJeCFT4MrXjhcU8TA0GU3r0xCg@babar.db.elephantsql.com/xmfgeufm",
    logging: true,
    synchronize: false,
    entities: [
      User, UserTokens, Employee, Department, Position, Payroll
        // "./src/modules/users/infra/typeorm/entities/.ts",
        // "./src/modules/appointments/infra/typeorm/entities/.ts"

    ],
    subscribers: [
        "subscriber/*.js"
    ],
    entitySchemas: [
        "schema/*.json"
    ],
    migrations: [
        // "./src/shared/infra/typeorm/migrations/*.ts"
        `${__dirname}/**/migrations/*.{ts,js}`
    ],
    cli: {
        entitiesDir: "entity",
        migrationsDir: "src/database",
        subscribersDir: "subscriber"
    }
}

 export const AppDataSource = new DataSource(options)


