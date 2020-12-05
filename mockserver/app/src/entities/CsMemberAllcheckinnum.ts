import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cs_member_allcheckinnum", { schema: "csteach" })
export class CsMemberAllcheckinnum {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "phone",
    nullable: true,
    comment: "手机号",
    length: 50,
  })
  phone: string | null;

  @Column("varchar", {
    name: "username",
    nullable: true,
    comment: "用户名",
    length: 50,
  })
  username: string | null;

  @Column("int", { name: "allnumber", nullable: true, comment: "总签到天数" })
  allnumber: number | null;
}
