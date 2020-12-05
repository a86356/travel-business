import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cs_member_code", { schema: "csteach" })
export class CsMemberCode {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "phone",
    nullable: true,
    comment: "手机号",
    length: 20,
  })
  phone: string | null;

  @Column("varchar", {
    name: "code",
    nullable: true,
    comment: "验证码",
    length: 10,
  })
  code: string | null;

  @Column("varchar", {
    name: "channel",
    nullable: true,
    comment: "渠道,比如mob",
    length: 50,
  })
  channel: string | null;

  @Column("int", { name: "dateline", nullable: true, comment: "发送时间" })
  dateline: number | null;

  @Column("int", { name: "expire", nullable: true, comment: "过期时间" })
  expire: number | null;

  @Column("tinyint", {
    name: "is_used",
    nullable: true,
    comment: "是否使用过了",
    default: () => "'0'",
  })
  isUsed: number | null;

  @Column("smallint", {
    name: "type",
    nullable: true,
    comment: "使用类型,1表示登录,2注册，3修改密码,4修改支付宝",
    default: () => "'0'",
  })
  type: number | null;
}
