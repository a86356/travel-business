import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cs_member_collection", { schema: "csteach" })
export class CsMemberCollection {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "sub_id", nullable: true, comment: "收藏事物的id" })
  subId: number | null;

  @Column("int", {
    name: "type",
    nullable: true,
    comment: "收藏的类型 1 文章 2 视频",
  })
  type: number | null;

  @Column("varchar", {
    name: "title",
    nullable: true,
    comment: "收藏的事物的标题",
    length: 200,
  })
  title: string | null;

  @Column("varchar", { name: "nickname", nullable: true, length: 50 })
  nickname: string | null;

  @Column("varchar", { name: "phone", nullable: true, length: 50 })
  phone: string | null;

  @Column("varchar", { name: "avatar_url", nullable: true, length: 500 })
  avatarUrl: string | null;

  @Column("int", { name: "create_time", nullable: true, comment: "创建时间" })
  createTime: number | null;
}
