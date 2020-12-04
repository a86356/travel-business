import React, { useState, useEffect } from "react";
import MenuBar from "../../components/MenuBar";
import { Tabs } from "antd-mobile";
import "./index.less";
import { useSelector, useDispatch } from "react-redux";

import useObserverHook from "../../custom-hooks/useObserverHook";
import { CommonEnum } from "../../enums";
import Banner from "./components/banner";
import Info from "./components/info";
import Lists from "./components/list";
import Footer from "./components/footer";

export default function houseContainer() {
  const { house } = useSelector((state: any) => {
    return {
      house: state.house,
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "house/getDetailAsync",
    });
    dispatch({
      type: "house/getCommentsListAsync",
    });
  }, []);

  return (
    <div className="house-page">
      {/**banner */}
      <Banner banner={house?.banner} />
      {/**房屋信息 */}
      <Info detail={house?.info} />
      {/*/!**评论列表 *!/*/}
      <Lists showLoading={house.showLoading} lists={house.comments} />
      {/*/!**footer *!/*/}
      <Footer />
    </div>
  );
}
