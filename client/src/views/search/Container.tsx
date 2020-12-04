import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, SearchBar } from "antd-mobile";
import "./index.less";
import useRouterHook from "../../custom-hooks/useRouterHook";
import useObserverHook from "../../custom-hooks/useObserverHook";
import { CommonEnum } from "../../enums";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../models/search";
import useImgHook from "../../custom-hooks/useImgHook";

export default function SearchContainer() {
  const dispatch = useDispatch();
  const { search } = useSelector((state: any) => {
    return {
      search: state.search,
    };
  });

  useEffect(() => {
    dispatch({
      type: "search/getSearchListAsync",
    });
  }, [search.houseSubmitName, search.page.pageNum]);

  const handleChange = (e) => {
    console.log(e);
    dispatch({ type: "search/setHouseName", payload: e });
  };
  const handleCancle = () => {
    dispatch({ type: "search/setHouseName", payload: "" });
  };
  const handleSubmit = (value) => {
    dispatch({ type: "search/submitTitle", payload: value });
    dispatch({ type: "search/setHouseName", payload: "" });
  };

  useImgHook(".item-img", () => {}, [search.searchList]);

  return (
    <div className="search-page" id={"searchPage"}>
      {/**顶部搜索栏 */}
      <SearchBar
        placeholder="搜索民宿"
        value={search.houseName}
        onChange={handleChange}
        onCancel={handleCancle}
        onSubmit={handleSubmit}
      />
      {/*民宿列表*/}

      <div className={"result"} id={"result"}>
        {search.searchList.map((item) => {
          return (
            <div className="item" key={item.id}>
              <img
                alt="img"
                className="item-img"
                src={require("../../assets/blank.png")}
                data-src={item.img}
              />
              <div className="item-right">
                <div className="title">{item?.title}</div>
                <div className="price">{item?.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
