import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("order", { schema: "travel" })
export class Order {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "create_time",
    nullable: true,
    comment: "创建时间",
    length: 50,
  })
  createTime: string | null;

  @Column("varchar", {
    name: "img",
    nullable: true,
    comment: "留言信息",
    length: 500,
  })
  img: string | null;

  @Column("varchar", {
    name: "info",
    nullable: true,
    comment: "订单信息",
    length: 500,
  })
  info: string | null;

  @Column("decimal", {
    name: "price",
    nullable: true,
    comment: "价格",
    precision: 20,
    scale: 3,
  })
  price: string | null;

  @Column("varchar", {
    name: "title",
    nullable: true,
    comment: "订单标题",
    length: 50,
  })
  title: string | null;

  @Column("tinyint", { name: "status", nullable: true, comment: "订单状态" })
  status: number | null;
}
