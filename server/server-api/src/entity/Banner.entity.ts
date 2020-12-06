import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("banner", { schema: "travel" })
export class Banner {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "goods_id", comment: "商品id", default: () => "'0'" })
  goodsId: number;

  @Column("varchar", {
    name: "pic",
    comment: "轮播图片",
    length: 500,
    default: () => "'0'",
  })
  pic: string;
}
