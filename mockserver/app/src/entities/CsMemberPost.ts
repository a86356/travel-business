import { Column, Entity } from "typeorm";

@Entity("cs_member_post", { schema: "csteach" })
export class CsMemberPost {
  @Column("int", { name: "id", nullable: true })
  id: number | null;

  @Column("int", { name: "create_time", nullable: true, comment: "创建时间" })
  createTime: number | null;

  @Column("varchar", {
    name: "pub_nickname",
    nullable: true,
    comment: "发帖人昵称",
    length: 50,
  })
  pubNickname: string | null;

  @Column("varchar", {
    name: "pub_phone",
    nullable: true,
    comment: "发帖人手机号",
    length: 50,
  })
  pubPhone: string | null;

  @Column("varchar", {
    name: "pub_avatar_url",
    nullable: true,
    comment: "发帖人头像",
    length: 200,
  })
  pubAvatarUrl: string | null;

  @Column("int", { name: "type", nullable: true })
  type: number | null;
}
