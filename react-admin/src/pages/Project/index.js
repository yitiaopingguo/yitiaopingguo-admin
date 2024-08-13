import React, { useState, useEffect } from "react";
import Table from "../../components/Table";
import { getProjectList } from "@/api/project";
import { Space, Button, Input, Col, Row, Select } from "antd";
import "./Project.scss";

function Project() {
  const [pageData, setPageData] = useState(null); // 初始状态设置为null或空数组
  const [titleValue, setTitleValue] = useState('');
  const [tagValue, setTagValue] = useState(null); 
  const [totalPage, setTotalPage] = useState(null); 
  const [currPage, setCurrPage] = useState(null); 
  
  const columns = [
    {
      title: "项目名",
      dataIndex: "title",
      key: "title",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "描述",
      dataIndex: "description",
      key: "description",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "创建时间",
      dataIndex: "creattime",
      key: "creattime",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "操作",
      key: "action",
      width: 200,
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">编辑</Button>
          <Button type="primary" danger>
            删除
          </Button>
        </Space>
      ),
    },
  ];
// 这是父组件提供的回调函数，用于处理页码的改变  
const handlePageChange = (newPage) => {  
  setCurrPage(newPage); 
  // fetchGetPageData()
};  
  useEffect(() => {
    getTableList()
  }, [currPage]);

  async function getTableList() {
    try {
      let data = {
        currPage: currPage || 1,
        pageSize: 10,
        search: {
          title: titleValue,
        },
      };
      const res = await getProjectList(data);
      let listDate = [];
      for (let i = 0; i < res.data.length; i++) {
        listDate.push({
          key: i + 1,
          title: res.data[i].title,
          description: res.data[i].description,
          creattime: res.data[i].creattime,
        });
      }
      setTotalPage(res.data.total)
      setPageData(listDate);
      console.log(listDate,3333333);
    } catch (error) {
      // 错误处理
      console.error("Error fetching hot tags:", error);
    }
  }

  // 当输入框的值改变时，更新状态  
  const handleInputChange = (event) => {  
    setTitleValue(event.target.value);  
  }; 

  return (
    <div className="M-table">
      <div className="search-con">
        <Row>
          <Col span={8}>
            <div className="search-space">
              <Input placeholder="请输入文章标题" value={titleValue} onChange={handleInputChange} />
            </div>
          </Col>
          <Col span={8}>
            <Button type="primary" onClick={getTableList}>查询</Button>
          </Col>
        </Row>
      </div>

      {pageData && <Table tableColumns={columns} tableData={pageData} totalPage={totalPage}
      currPage={currPage} pageSize={10} onPageChange={handlePageChange}  ></Table>}
    </div>
  );
}

export default Project;

