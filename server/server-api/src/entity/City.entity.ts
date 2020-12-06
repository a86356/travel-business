import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("city", { schema: "travel" })
export class City {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "label",
    comment: "城市名称",
    length: 50,
    default: () => "'0'",
  })
  label: string;

  @Column("varchar", {
    name: "value",
    comment: "城市编号",
    length: 50,
    default: () => "'0'",
  })
  value: string;
}
