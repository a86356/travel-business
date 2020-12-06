import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("house", { schema: "travel" })
export class House {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "title",
    nullable: true,
    comment: "商品标题",
    length: 50,
  })
  title: string | null;

  @Column("varchar", {
    name: "img",
    comment: "图片",
    length: 500,
    default: () => "'0'",
  })
  img: string;

  @Column("decimal", {
    name: "price",
    comment: "价格",
    precision: 20,
    scale: 3,
    default: () => "'0.000'",
  })
  price: string;

  @Column("varchar", {
    name: "info",
    comment: "信息",
    length: 500,
    default: () => "'0'",
  })
  info: string;

  @Column("int", {
    name: "start_time",
    comment: "开始时间",
    default: () => "'0'",
  })
  startTime: number;

  @Column("int", { name: "end_time", default: () => "'0'" })
  endTime: number;

  @Column("int", {
    name: "update_time",
    comment: "更新时间",
    default: () => "'0'",
  })
  updateTime: number;

  @Column("varchar", {
    name: "type",
    comment: "商品类型",
    length: 500,
    default: () => "'0'",
  })
  type: string;

  @Column("varchar", {
    name: "msg",
    comment: "商品介绍",
    length: 500,
    default: () => "'0'",
  })
  msg: string;

  @Column("varchar", {
    name: "publishtime",
    comment: "发布时间",
    length: 500,
    default: () => "'0'",
  })
  publishtime: string;
}
