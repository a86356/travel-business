import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cs_member_segprogress", { schema: "csteach" })
export class CsMemberSegprogress {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "create_time", nullable: true, comment: "创建时间" })
  createTime: number | null;

  @Column("varchar", {
    name: "nickname",
    nullable: true,
    comment: "昵称",
    length: 50,
  })
  nickname: string | null;

  @Column("varchar", {
    name: "avatar_url",
    nullable: true,
    comment: "头像",
    length: 500,
  })
  avatarUrl: string | null;

  @Column("int", { name: "class_id", nullable: true, comment: "课程id" })
  classId: number | null;

  @Column("int", { name: "seg_id", nullable: true, comment: "节id" })
  segId: number | null;

  @Column("varchar", {
    name: "seg_name",
    nullable: true,
    comment: "节的名称",
    length: 200,
  })
  segName: string | null;

  @Column("varchar", {
    name: "now_time",
    nullable: true,
    comment: "当前的时间",
    length: 100,
  })
  nowTime: string | null;

  @Column("varchar", {
    name: "total_time",
    nullable: true,
    comment: "总时间",
    length: 100,
  })
  totalTime: string | null;

  @Column("tinyint", {
    name: "is_end",
    nullable: true,
    comment: "1 未完 2已完成",
  })
  isEnd: number | null;
}
