import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cs_article_base", { schema: "csteach" })
export class CsArticleBase {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "pub_phone",
    nullable: true,
    comment: "发布人手机号",
    length: 50,
  })
  pubPhone: string | null;

  @Column("varchar", {
    name: "pub_nickname",
    nullable: true,
    comment: "发布人昵称",
    length: 500,
  })
  pubNickname: string | null;

  @Column("varchar", {
    name: "pub_avatar_url",
    nullable: true,
    comment: "发布人头像",
    length: 500,
  })
  pubAvatarUrl: string | null;

  @Column("int", { name: "create_time", nullable: true, comment: "发布时间" })
  createTime: number | null;

  @Column("varchar", {
    name: "type_id",
    nullable: true,
    comment: "文章类型id",
    length: 50,
  })
  typeId: string | null;

  @Column("varchar", {
    name: "type_name",
    nullable: true,
    comment: "文章类型中文",
    length: 50,
  })
  typeName: string | null;

  @Column("varchar", {
    name: "title",
    nullable: true,
    comment: "文章标题",
    length: 200,
  })
  title: string | null;

  @Column("text", {
    name: "content_html",
    nullable: true,
    comment: "文章内容html",
  })
  contentHtml: string | null;

  @Column("text", { name: "content_md", nullable: true, comment: "文章内容md" })
  contentMd: string | null;

  @Column("int", { name: "views", nullable: true, comment: "阅读量" })
  views: number | null;

  @Column("int", { name: "loves", nullable: true, comment: "收藏人数" })
  loves: number | null;

  @Column("int", { name: "commentnum", nullable: true, comment: "评论数" })
  commentnum: number | null;
}
