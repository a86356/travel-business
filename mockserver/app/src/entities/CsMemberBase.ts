import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cs_member_base", { schema: "csteach" })
export class CsMemberBase {
  @PrimaryGeneratedColumn({ type: "int", name: "id", comment: "主键" })
  id: number;

  @Column("varchar", {
    name: "username",
    nullable: true,
    comment: "用户名",
    length: 50,
  })
  username: string | null;

  @Column("varchar", {
    name: "nickname",
    nullable: true,
    comment: "昵称",
    length: 50,
  })
  nickname: string | null;

  @Column("varchar", {
    name: "email",
    nullable: true,
    comment: "邮箱",
    length: 50,
  })
  email: string | null;

  @Column("varchar", {
    name: "phone",
    nullable: true,
    comment: "手机号",
    length: 50,
  })
  phone: string | null;

  @Column("varchar", {
    name: "password",
    nullable: true,
    comment: "密码",
    length: 100,
  })
  password: string | null;

  @Column("varchar", {
    name: "auth_key",
    nullable: true,
    comment: "密钥",
    length: 100,
  })
  authKey: string | null;

  @Column("varchar", {
    name: "viptype",
    nullable: true,
    comment: "1 表示 普通用户 2 表示vip 3 表示svip",
    length: 50,
  })
  viptype: string | null;

  @Column("datetime", {
    name: "expired_time",
    nullable: true,
    comment: "会员过期时间",
  })
  expiredTime: Date | null;

  @Column("datetime", {
    name: "create_time",
    nullable: true,
    comment: "用户注册时间",
  })
  createTime: Date | null;

  @Column("varchar", {
    name: "github",
    nullable: true,
    comment: "github",
    length: 100,
  })
  github: string | null;

  @Column("varchar", {
    name: "weibo",
    nullable: true,
    comment: "weibo",
    length: 100,
  })
  weibo: string | null;

  @Column("int", {
    name: "point",
    nullable: true,
    comment: "积分",
    default: () => "'0'",
  })
  point: number | null;

  @Column("varchar", {
    name: "avatar_url",
    nullable: true,
    comment: "头像",
    length: 500,
  })
  avatarUrl: string | null;

  @Column("varchar", {
    name: "company",
    nullable: true,
    comment: "公司名",
    length: 500,
  })
  company: string | null;

  @Column("varchar", {
    name: "position",
    nullable: true,
    comment: "职位",
    length: 500,
  })
  position: string | null;

  @Column("int", {
    name: "last_login",
    nullable: true,
    comment: "最后一次登录",
  })
  lastLogin: number | null;
}
