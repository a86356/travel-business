import React, { useState, useEffect } from "react";
import MenuBar from "../../components/MenuBar";
import { Tabs } from "antd-mobile";
import "./index.less";
import Lists from "./components/lists";
import { useSelector, useDispatch } from "react-redux";

import useObserverHook from "../../custom-hooks/useObserverHook";
import { CommonEnum } from "../../enums";

export default function orderContainer() {
  const { order } = useSelector((state: any) => {
    return {
      order: state.order,
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "order/getListAsync",
    });
  }, [order.loadNum, order.type]);

  useObserverHook(
    "#" + CommonEnum.LOADING_ID,
    (entries) => {
      if (entries[0].isIntersecting) {
        if (order.list && order.result.length == CommonEnum.PAGE.pageSize) {
          dispatch({
            type: "order/getMoreList",
          });
          dispatch({
            type: "order/setShowLoading",
            payload: true,
          });
        } else {
          dispatch({
            type: "order/setShowLoading",
            payload: false,
          });
        }
      }
    },
    null
  );

  const tabs = [
    { title: "未支付", sub: 0 },
    { title: "已支付", sub: 1 },
  ];

  const handleChange = (value) => {
    if (order.type == value.sub) return;

    dispatch({
      type: "order/ReloadData",
      payload: value.sub,
    });
  };

  return (
    <div className="App">
      <div className="order-page">
        <Tabs tabs={tabs} onChange={handleChange}>
          <div className="tab">
            <Lists
              orders={order.list}
              type={0}
              showLoading={order.showLoading}
            />
          </div>
          <div className="tab">
            <Lists
              orders={order.list}
              type={1}
              showLoading={order.showLoading}
            />
          </div>
        </Tabs>
      </div>
      <MenuBar />
    </div>
  );
}
