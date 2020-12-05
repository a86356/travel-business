import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cs_classes_studymember", { schema: "csteach" })
export class CsClassesStudymember {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

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

  @Column("varchar", {
    name: "pic_url",
    nullable: true,
    comment: "课程图片",
    length: 500,
  })
  picUrl: string | null;

  @Column("int", { name: "class_id", nullable: true, comment: "课程id" })
  classId: number | null;

  @Column("varchar", {
    name: "class_name",
    nullable: true,
    comment: "课程名称",
    length: 500,
  })
  className: string | null;

  @Column("int", { name: "create_time", nullable: true, comment: "创建时间" })
  createTime: number | null;
}
