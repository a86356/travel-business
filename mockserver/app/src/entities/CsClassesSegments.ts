import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cs_classes_segments", { schema: "csteach" })
export class CsClassesSegments {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "class_id", nullable: true, comment: "大课id" })
  classId: number | null;

  @Column("varchar", {
    name: "class_name",
    nullable: true,
    comment: "大课名字",
    length: 50,
  })
  className: string | null;

  @Column("varchar", {
    name: "seg_id",
    nullable: true,
    comment: "小课id",
    length: 50,
  })
  segId: string | null;

  @Column("varchar", {
    name: "seg_name",
    nullable: true,
    comment: "小课名字",
    length: 50,
  })
  segName: string | null;

  @Column("int", { name: "create_time", nullable: true, comment: "创建时间" })
  createTime: number | null;

  @Column("varchar", {
    name: "duration",
    nullable: true,
    comment: "时间长度",
    length: 50,
  })
  duration: string | null;

  @Column("int", { name: "duration_s", nullable: true, comment: "时间长度秒" })
  durationS: number | null;

  @Column("varchar", {
    name: "segurl",
    nullable: true,
    comment: "分片播放地址",
    length: 500,
  })
  segurl: string | null;

  @Column("varchar", {
    name: "mp4url",
    nullable: true,
    comment: "mp4地址",
    length: 500,
  })
  mp4url: string | null;

  @Column("varchar", {
    name: "outerurl",
    nullable: true,
    comment: "外部播放地址",
    length: 500,
  })
  outerurl: string | null;

  @Column("smallint", {
    name: "isvip",
    nullable: true,
    comment: "1 表示免费 2 vip",
  })
  isvip: number | null;

  @Column("smallint", { name: "sort", nullable: true, comment: "排序" })
  sort: number | null;

  @Column("smallint", {
    name: "status",
    nullable: true,
    comment: "1 表示上架，2 表示下架",
  })
  status: number | null;
}
