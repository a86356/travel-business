import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cs_member_dynamic", { schema: "csteach" })
export class CsMemberDynamic {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "nickname",
    nullable: true,
    comment: "用户昵称",
    length: 50,
  })
  nickname: string | null;

  @Column("varchar", {
    name: "avatar_url",
    nullable: true,
    comment: "用户头像",
    length: 290,
  })
  avatarUrl: string | null;

  @Column("varchar", {
    name: "title",
    nullable: true,
    comment: "动态的标题",
    length: 200,
  })
  title: string | null;

  @Column("int", { name: "create_time", nullable: true, comment: "创建的时间" })
  createTime: number | null;

  @Column("smallint", {
    name: "top",
    nullable: true,
    comment: "1 表示不置顶，2 表示置顶",
  })
  top: number | null;

  @Column("smallint", {
    name: "type",
    nullable: true,
    comment: "1 签到 2 文章 3 评论 4 回复 5 视频",
  })
  type: number | null;

  @Column("int", { name: "sub_id", nullable: true, comment: "跳转的id" })
  subId: number | null;
}
