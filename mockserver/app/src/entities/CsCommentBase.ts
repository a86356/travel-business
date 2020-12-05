import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cs_comment_base", { schema: "csteach" })
export class CsCommentBase {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "main_id", nullable: true, comment: "被评论主题的id" })
  mainId: number | null;

  @Column("smallint", {
    name: "type",
    nullable: true,
    comment: "被评论主题的类型 1 文章 2 视频",
  })
  type: number | null;

  @Column("int", { name: "pub_floor", nullable: true, comment: "评论的楼层数" })
  pubFloor: number | null;

  @Column("varchar", {
    name: "pub_nickname",
    nullable: true,
    comment: "发评论人的昵称",
    length: 50,
  })
  pubNickname: string | null;

  @Column("varchar", {
    name: "pub_avatar_url",
    nullable: true,
    comment: "发评论人的头像",
    length: 500,
  })
  pubAvatarUrl: string | null;

  @Column("text", {
    name: "pub_cnt",
    nullable: true,
    comment: "发评论人的内容",
  })
  pubCnt: string | null;

  @Column("int", { name: "quote_id", nullable: true, comment: "引用的评论id" })
  quoteId: number | null;

  @Column("int", { name: "quote_floor", nullable: true, comment: "引用的楼层" })
  quoteFloor: number | null;

  @Column("varchar", {
    name: "quote_nickname",
    nullable: true,
    comment: "引用的昵称",
    length: 50,
  })
  quoteNickname: string | null;

  @Column("text", { name: "quote_cnt", nullable: true, comment: "引用的内容" })
  quoteCnt: string | null;

  @Column("int", { name: "create_time", nullable: true, comment: "创建时间" })
  createTime: number | null;
}
