import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cs_classes_base", { schema: "csteach" })
export class CsClassesBase {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "classesname",
    nullable: true,
    comment: "课程名称",
    length: 50,
  })
  classesname: string | null;

  @Column("varchar", {
    name: "classescategory",
    nullable: true,
    comment: "课程分类",
    length: 50,
  })
  classescategory: string | null;

  @Column("int", { name: "create_time", nullable: true, comment: "创建时间" })
  createTime: number | null;

  @Column("text", {
    name: "introduction_html",
    nullable: true,
    comment: "课程介绍",
  })
  introductionHtml: string | null;

  @Column("text", {
    name: "introduction_md",
    nullable: true,
    comment: "markdown",
  })
  introductionMd: string | null;

  @Column("text", { name: "reference", nullable: true, comment: "参考内容" })
  reference: string | null;

  @Column("varchar", {
    name: "segnumber",
    nullable: true,
    comment: "课程节数",
    length: 50,
  })
  segnumber: string | null;

  @Column("varchar", {
    name: "pic",
    nullable: true,
    comment: "课程海报",
    length: 500,
  })
  pic: string | null;

  @Column("int", { name: "commentnum", nullable: true, comment: "留言数" })
  commentnum: number | null;

  @Column("int", { name: "lovenum", nullable: true, comment: "喜欢数" })
  lovenum: number | null;

  @Column("varchar", {
    name: "author",
    nullable: true,
    comment: "作者",
    length: 50,
  })
  author: string | null;

  @Column("smallint", {
    name: "status",
    nullable: true,
    comment: "1 未更新 2 更新中 3 已完结",
  })
  status: number | null;

  @Column("smallint", {
    name: "viptype",
    nullable: true,
    comment: "1 免费课程 2 收费课程",
  })
  viptype: number | null;

  @Column("smallint", { name: "sort", nullable: true, comment: "排序" })
  sort: number | null;

  @Column("varchar", {
    name: "duration",
    nullable: true,
    comment: "时间长度",
    length: 50,
  })
  duration: string | null;

  @Column("int", { name: "duration_s", nullable: true, comment: "时间长度秒" })
  durationS: number | null;
}
