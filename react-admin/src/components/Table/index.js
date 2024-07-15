import React from "react";
import { Space, Table, Tag } from "antd";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>add</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
let data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

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
        current: currPage, // 当前页码为1
        total: totalPage, // 总数据条数为26
      }}
    />
  );
};

export default App;
