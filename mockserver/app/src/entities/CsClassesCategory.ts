import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cs_classes_category", { schema: "csteach" })
export class CsClassesCategory {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "name",
    nullable: true,
    comment: "分类名称",
    length: 50,
  })
  name: string | null;

  @Column("int", { name: "sort", nullable: true, comment: "排序" })
  sort: number | null;

  @Column("int", { name: "create_time", nullable: true })
  createTime: number | null;
}
