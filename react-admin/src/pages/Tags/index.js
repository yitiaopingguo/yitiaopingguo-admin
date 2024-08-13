import React, { useState, useEffect } from "react";
import Table from "../../components/Table";
import { getAllCategory } from "@/api/user";
import { Space , Button} from "antd";
import "./Tags.scss";

function Tags() {
  const [hotTags, setHotTags] = useState(null); // 初始状态设置为null或空数组
  const [currPage, setCurrPage] = useState(null);
  const [totalPage, setTotalPage] = useState(null);
  const columns = [
    {
      title: "分类图标",
      dataIndex: "categoryIcon",
      key: "categoryIcon",
      render: (text) => (
        <img style={{ width: "50px", height: "50px" }} src={text} alt="" />
      ),
    },
    {
      title: "分类名字",
      dataIndex: "categoryName",
      key: "categoryName",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "分类描述",
      dataIndex: "categoryDescription",
      key: "categoryDescription",
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
  }, [currPage]); // 空数组表示这个effect只会在组件挂载时运行一次

  //获取标签列表
  async function fetchHotTags() {
    try {
      let data = {
        pageNum: currPage || 1,
        pageSize: 10,
        param: {
          categoryName: '',
        },
      };
      const res = await getAllCategory(data);
      if (res.code === 200) {
        let listDate = [];
        for (let i = 0; i < res.data.length; i++) {
          listDate.push({
            key: res.data[i].articleId,
            categoryName: res.data[i].categoryName,
            categoryIcon: res.data[i].categoryIcon,
            categoryDescription:res.data[i].categoryDescription
          });
        }
        setTotalPage(res.total);
        setHotTags(listDate);
      }
    } catch (error) {
      // 错误处理
      console.error("Error fetching hot tags:", error);
    }
  }

  // 这是父组件提供的回调函数，用于处理页码的改变
  const handlePageChange = (newPage) => {
    setCurrPage(newPage);
  };

  return (
    <div className="M-table">
      {hotTags && 
      <Table
      tableColumns={columns}
      tableData={hotTags}
      totalPage={totalPage}
      currPage={currPage}
      pageSize={10}
      onPageChange={handlePageChange}
    ></Table>
     }
    </div>
  );
}

export default Tags;
