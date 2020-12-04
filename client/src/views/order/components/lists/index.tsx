import OrderItem from "../item/Item";

import ShowLoading from "../../../../components/showLoading";

export default function Index(props) {
  return (
    <div>
      <div className="tab-lists">
        {props.orders.map((item) => (
          <OrderItem type={props.type} key={item.id} {...item} />
        ))}
        <ShowLoading showLoading={props.showLoading} />
      </div>
    </div>
  );
}
