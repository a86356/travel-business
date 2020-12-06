import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user", { schema: "travel" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "avatar", length: 255 })
  avatar: string;

  @Column("varchar", { name: "tel", length: 255 })
  tel: string;

  @Column("varchar", { name: "sign", length: 255 })
  sign: string;

  @Column("varchar", { name: "token", length: 255 })
  token: string;

  @Column("varchar", { name: "username", length: 255 })
  username: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;
}
