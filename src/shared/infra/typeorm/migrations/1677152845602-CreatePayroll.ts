import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePayroll1677152845602 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'payrolls',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'employee_uid',
            type: 'uuid', 
          },
          {
            name: "year",
            type: "int",
          },
          {
            name: "month",
            type: "varchar",
          },
          {
            name: "salary_base",
            type: "real",
          },
          {
            name: "total_income",
            type: "real",
          },
          {
            name: "salary_liquid",
            type: "real",
          },
          {
            name: "overtime50",
            type: "int",
          },
          {
            name: "overtime100",
            type: "int",
          },
          {
            name: "total_overtime",
            type: "real",
          },
          {
            name: "month_total_workdays",
            type: "int",
          },
          {
            name: "day_total_workhours",
            type: "int",
          },
          {
            name: "base_day",
            type: "real",
          },
          {
            name: "base_hour",
            type: "real",
          },
          {
            name: "absences",
            type: "int",
          },
          {
            name: "total_absences",
            type: "real",
          },
          {
            name: "cash_advances",
            type: "real",
          },
          {
            name: "backpay",
            type: "real",
          },
          {
            name: "bonus",
            type: "real",
          },
          {
            name: "irps",
            type: "real",
          },          
          {
            name: "inss",
            type: "real",
          },
          {
            name: 'created_at',
            type: "timestamp",
            default: "now()"
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ],
        foreignKeys: [
          {
            name: 'PayrollEmployee',
            referencedTableName: 'employees',
            referencedColumnNames: ['id'],
            columnNames: ['employee_uid'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
          }
        ]

      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('payrolls')
  }

}

