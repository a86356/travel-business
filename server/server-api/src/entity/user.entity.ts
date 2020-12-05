import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    avatar: string;

    @Column()
    tel: string;

    @Column()
    sign: string;


    @Column()
    token: string;

    @Column()
    username: string;
    @Column()
    password: string;

}