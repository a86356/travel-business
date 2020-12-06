import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("comment", { schema: "travel" })
export class Comment {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "avatar",
    comment: "头像",
    length: 500,
    default: () => "'0'",
  })
  avatar: string;

  @Column("int", {
    name: "create_time",
    comment: "创建时间",
    default: () => "'0'",
  })
  createTime: number;

  @Column("varchar", {
    name: "info",
    comment: "评论信息",
    length: 500,
    default: () => "'0'",
  })
  info: string;

  @Column("varchar", {
    name: "username",
    comment: "评论用户名",
    length: 500,
    default: () => "'0'",
  })
  username: string;
}
