import { Exclude } from "class-transformer";
import { Role } from "src/role/role.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({ unique: true })
    email: string

    @Column()
    @Exclude()
    password: string;

    @ManyToOne(() => Role)
    @JoinColumn({ name: 'role_id' })
    role: Role
}