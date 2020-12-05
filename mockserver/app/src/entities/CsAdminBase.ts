import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cs_admin_base", { schema: "csteach" })
export class CsAdminBase {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "username",
    nullable: true,
    comment: "用户名",
    length: 50,
  })
  username: string | null;

  @Column("varchar", { name: "password", nullable: true, length: 50 })
  password: string | null;

  @Column("varchar", {
    name: "auth_key",
    nullable: true,
    comment: "密钥",
    length: 50,
  })
  authKey: string | null;

  @Column("int", { name: "age", nullable: true })
  age: number | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
  })
  createTime: Date | null;

  @Column("datetime", {
    name: "update_time",
    nullable: true,
    comment: "更新时间",
  })
  updateTime: Date | null;

  @Column("varchar", { name: "dateline", nullable: true, length: 50 })
  dateline: string | null;
}
