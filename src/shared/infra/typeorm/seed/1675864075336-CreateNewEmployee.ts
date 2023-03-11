import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateNewEmployee1675864075336 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'employees',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'employee_id',
            type: 'int',
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            isUnique: true
          },
          {
            name: 'dependents',
            type: 'int',
          },
          {
            name: "salary",
            type: "int",
          },
          {
            name: 'position_id',
            type: 'uuid',
            isNullable: true
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
              name: "FKEmployeePosition",
              referencedTableName: "positions",
              referencedColumnNames: ["id"],
              columnNames: ["position_id"],
              onDelete: "SET NULL",
              onUpdate: "SET NULL"
          }
      ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('employees')
  }

}