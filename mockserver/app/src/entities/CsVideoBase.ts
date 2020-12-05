import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cs_video_base", { schema: "csteach" })
export class CsVideoBase {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "视频名称",
    length: 500,
  })
  name: string | null;

  @Column("int", { name: "create_time", nullable: true, comment: "上传时间" })
  createTime: number | null;

  @Column("varchar", {
    name: "duration",
    nullable: true,
    comment: "视频长度",
    length: 50,
  })
  duration: string | null;

  @Column("int", { name: "duration_s", nullable: true, comment: "视频长度 秒" })
  durationS: number | null;

  @Column("text", {
    name: "video_mp4_url",
    nullable: true,
    comment: "视频mp4地址",
  })
  videoMp4Url: string | null;

  @Column("varchar", {
    name: "video_segment_url",
    nullable: true,
    comment: "视频分片地址",
    length: 500,
  })
  videoSegmentUrl: string | null;

  @Column("varchar", {
    name: "hash",
    nullable: true,
    comment: "七牛的hash值",
    length: 100,
  })
  hash: string | null;
}
