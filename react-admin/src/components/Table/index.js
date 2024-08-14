import React from "react";
import { Table } from "antd";
const columns = [];
let data = [];

const App = ({
  tableData,
  tableColumns,
  totalPage,
  pageSize,
  currPage,
  onPageChange, // 这是父组件提供的回调函数
}) => {
  const hanleChangePage = (pagination) => {
    const { current } = pagination;
    // 调用父组件提供的回调函数，并传递新的页码
    onPageChange(current);
  };

  return (
    <Table
      onChange={hanleChangePage}
      columns={tableColumns.length ? tableColumns : columns}
      dataSource={tableData.length ? tableData : data}
      pagination={{
        pageSize: pageSize, // 每页显示10条数据
        current: currPage || 1, // 当前页码为1
        total: totalPage, // 总数据条数为26
      }}
    />
  );
};

export default App;
