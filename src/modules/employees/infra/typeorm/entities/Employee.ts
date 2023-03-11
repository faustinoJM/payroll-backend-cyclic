import { Column, CreateDateColumn, Double, Entity, Generated, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import Department from "../../../../departments/infra/typeorm/entities/Department";
import Position from "../../../../positions/infra/typeorm/entities/Position";

@Entity("employees")
class Employee {
    @PrimaryColumn('uuid')
    id?: string;
  
    @Column()
    employee_id: number;

    @Column()
    name: string;

    @Column()
    salary: string;

    @Column()
    dependents: number;

    @Column()
    birth_date: Date;
    
    @Column()
    place_birth: string;

    @Column()
    nationality:  string;

    @Column()
    bi: string;

    @Column()
    marital_status: string;
    
    @Column()
    gender: string;

    @Column()
    address: string;

    @Column()
    contact: number;

    @Column()
    email: string;

    @Column()
    nuit: number;

    @Column()
    bonus: string;

    @Column()
    start_date: Date;

    @Column()
    employee_status: string;

    @Column()
    bank_name: string;

    @Column()
    bank_account: number;

    @Column()
    nib: number;

    @Column()
    social_security: number;
    

    @Column()
    position_id: string;
    
    @ManyToOne(() => Position)
    @JoinColumn({ name: "position_id"})
    position: Position;

    @Column()
    department_id: string; 

    @ManyToOne(() => Department)
    @JoinColumn({ name: "department_id"})
    department: Department;

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuidV4()
        }
    }
}

export { Employee };


        // name: string;
        // birth_date: string;
        // place_birth: string;
        // nationality:  string;
        // bi: string;
        // marital_status: string;
        // gender: string;
        // address: string;
        // contact: string;
        // email: string;
        // nuit: string;
        // dependents: string;
        // salary: string;
        // bonus: string;
        // department: string;
        // position: string;
        // start_date: string;
        // employee_status: string;
        // bank_name: string;
        // bank_account: string;
        // nib: string;
        // social_security: string;