import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cs_member_checkin", { schema: "csteach" })
export class CsMemberCheckin {
  @PrimaryGeneratedColumn({ type: "int", name: "id", comment: "id" })
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
    name: "phone",
    nullable: true,
    comment: "手机号",
    length: 50,
  })
  phone: string | null;

  @Column("int", { name: "create_time", nullable: true, comment: "签到时间" })
  createTime: number | null;

  @Column("tinyint", {
    name: "viptype",
    nullable: true,
    comment: "1 普通 2 vip 3 svip",
  })
  viptype: number | null;

  @Column("varchar", {
    name: "avatar_url",
    nullable: true,
    comment: "签到头像",
    length: 200,
  })
  avatarUrl: string | null;

  @Column("varchar", {
    name: "email",
    nullable: true,
    comment: "邮箱",
    length: 50,
  })
  email: string | null;

  @Column("text", { name: "cnt", nullable: true, comment: "签到内容" })
  cnt: string | null;

  @Column("varchar", {
    name: "mood",
    nullable: true,
    comment: "签到心情",
    length: 50,
  })
  mood: string | null;
}
