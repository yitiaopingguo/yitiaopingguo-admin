import React from "react";
import { Breadcrumb } from "antd";
const App = (props) => {
  const list = props.breadDate;
  const listDate = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].parent) {
        listDate.push({ title: list[i].parent },{ title: list[i].label });
    } else {
        listDate.push({ title: list[i].label });
    }
  }
  return <Breadcrumb items={listDate} />;
};
export default App;
