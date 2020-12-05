import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("article", { schema: "csteach" })
export class Article {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("text", { name: "content" })
  content: string;

  @Column("int", { name: "status" })
  status: number;
}
