import React, { useState, useEffect } from "react";
import Table from "../../components/Table";
import { getAllHotTag } from "@/api/user";
import { Space , Button} from "antd";
import "./Tags.scss";

function Tags() {
  const [hotTags, setHotTags] = useState(null); // 初始状态设置为null或空数组
  const columns = [
    {
      title: "标签名",
      dataIndex: "name",
      key: "name",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "操作",
      key: "action",
      width: 200,
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">新增</Button>
          <Button type="primary" danger>删除</Button>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    fetchHotTags();
  }, []); // 空数组表示这个effect只会在组件挂载时运行一次

  //获取标签列表
  async function fetchHotTags() {
    try {
      const res = await getAllHotTag();
      let listDate = []
      for (let i = 0; i < res.data.length; i++) {
        listDate.push({ key: i + 1, name: res.data[i] });
      }
      setHotTags(listDate);
    } catch (error) {
      // 错误处理
      console.error("Error fetching hot tags:", error);
    }
  }

  return (
    <div className="M-table">
      {hotTags && <Table tableColumns={columns} tableData={hotTags}></Table>}
    </div>
  );
}

export default Tags;
