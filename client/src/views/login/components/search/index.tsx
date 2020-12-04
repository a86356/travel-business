import React, { useState, useEffect, memo } from "react";
import { Picker, List, Calendar, Button, Toast } from "antd-mobile";
import dayjs from "dayjs";
import useRouterHook from "../../../../custom-hooks/useRouterHook";
import { useSelector, useDispatch } from "react-redux";
function Search(props) {
  const { history } = useRouterHook();
  const { home } = useSelector((state: any) => {
    return {
      home: state.home,
    };
  });
  const dispatch = useDispatch();

  // 数据可以存储在state usestate ，redux
  const handleCityChange = (value) => {
    dispatch({
      type: "home/setSelectedCity",
      payload: value,
    });
  };

  useEffect(() => {
    dispatch({
      type: "home/getCityListsAsync",
    });
  }, []);

  const handleDate = () => {
    dispatch({
      type: "home/setDateShow",
    });
  };

  const handleDateConfirm = (startTime, endTime) => {
    dispatch({
      type: "home/setDateShow",
    });
    dispatch({
      type: "home/setTimes",
      payload: {
        startTime: startTime,
        endTime: endTime,
      },
    });
  };

  const handleClick = () => {};

  return (
    <div className="search">
      {/**可选城市 */}
      <div className="search-addr">
        <Picker
          title="城市"
          data={[home.citys]}
          value={home.selectedCity}
          cascade={false}
          cols={1}
          onChange={handleCityChange}
        >
          <List.Item>可选城市</List.Item>
        </Picker>
      </div>
      {/**可选时间 */}
      <div className="search-time" onClick={handleDate}>
        <p className="search-time_left">出租时间</p>
        <p className="search-time_right">{home.times}</p>
      </div>
      {/**点击按钮 */}
      <Button type="warning" size="large" onClick={handleClick}>
        搜索民宿
      </Button>
      <Calendar
        visible={home.dateShow}
        onCancel={handleDate}
        onConfirm={handleDateConfirm}
      />
    </div>
  );
}

export default memo(Search);
