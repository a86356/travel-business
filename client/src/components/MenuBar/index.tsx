import React, { useState } from "react";
import { TabBar } from "antd-mobile";
import PropTypes from "prop-types";
import {
  BsBag,
  BsBagFill,
  BsHouseDoor,
  BsHouseDoorFill,
  BsPerson,
  BsPersonFill,
} from "react-icons/bs";
import "./index.less";
import useRouterHook from "../../custom-hooks/useRouterHook";

export default function MenuBar() {
  const [items, setItems] = useState([
    {
      title: "首页",
      selectedIcon: <BsHouseDoorFill style={{ fontSize: "1.5rem" }} />,
      icon: <BsHouseDoor style={{ fontSize: "1.5rem" }} />,
      link: "/",
    },
    {
      title: "订单",
      selectedIcon: <BsBagFill style={{ fontSize: "1.5rem" }} />,
      icon: <BsBag style={{ fontSize: "1.5rem" }} />,
      link: "/order",
    },
    {
      title: "我的",
      selectedIcon: <BsPersonFill style={{ fontSize: "1.5rem" }} />,
      icon: <BsPerson style={{ fontSize: "1.5rem" }} />,
      link: "/user",
    },
  ]);

  const { history, pathname } = useRouterHook();
  console.log(pathname);

  return (
    <div className="menu-bar">
      <TabBar>
        {items.map((item) => (
          <TabBar.Item
            key={item.link}
            title={item.title}
            icon={item.icon}
            selectedIcon={item.selectedIcon}
            selected={pathname === item.link}
            onPress={() => history.push(item.link)}
          />
        ))}
      </TabBar>
    </div>
  );
}

MenuBar.defaultProps = {
  show: false,
  pathname: "",
};

MenuBar.propTypes = {
  show: PropTypes.bool,
  pathname: PropTypes.string,
};
