import React, { useState } from "react";
import MenuBar from "../../components/MenuBar";
import Header from "./components/header";
import Search from "./components/search";
import Hot from "./components/hot";
import "./index.less";

export default function homeContainer() {
  return (
    <div className="home">
      {/*登陆头部区*/}
      <Header />
      {/*搜索区*/}
      <Search />
      {/*热门名宿*/}
      <Hot />
      {/*底部导航*/}
      <MenuBar />
    </div>
  );
}
