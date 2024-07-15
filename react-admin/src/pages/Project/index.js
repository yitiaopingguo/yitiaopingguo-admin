import React, { useState, useEffect } from "react";
import Table from "../../components/Table";
import { getPageData , getAllHotTag } from "@/api/user";
import { Space, Button, Input, Col, Row, Select } from "antd";
import "./Project.scss";

function Project() {
  const [pageData, setPageData] = useState(null); // 初始状态设置为null或空数组
  const [hotTags, setHotTags] = useState(null); // 初始状态设置为null或空数组
  const [titleValue, setTitleValue] = useState('');
  const [tagValue, setTagValue] = useState(null); 
  const [totalPage, setTotalPage] = useState(null); 
  const [currPage, setCurrPage] = useState(null); 
  
  const columns = [
    {
      title: "图片",
      dataIndex: "articleThImg",
      key: "articleThImg",
      render: (text) => (
        <img style={{ width: "50px", height: "50px" }} src={text} alt="" />
      ),
    },
    {
      title: "文章名",
      dataIndex: "articleTitle",
      key: "articleTitle",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "操作",
      key: "action",
      width: 200,
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary">新增</Button>
          <Button type="primary" danger>
            删除
          </Button>
        </Space>
      ),
    },
  ];
  //选择标签select
  const handleChange = (value) => {
    setTagValue(value)
  };
// 这是父组件提供的回调函数，用于处理页码的改变  
const handlePageChange = (newPage) => {  
  setCurrPage(newPage); 
  // fetchGetPageData()
};  
  useEffect(() => {
    fetchGetPageData()
  }, [currPage]);
  useEffect(() => {
    fetchHotTags()
  }, []);

  async function fetchGetPageData() {
    try {
      let data = {
        currPage: currPage || 1,
        pageSize: 10,
        search: {
          content: "",
          title: titleValue,
          tag: tagValue
        },
      };
      const res = await getPageData(data);
      let listDate = [];
      for (let i = 0; i < res.data.pageDataList.length; i++) {
        listDate.push({
          key: i + 1,
          articleTitle: res.data.pageDataList[i].articleTitle,
          articleThImg: res.data.pageDataList[i].articleThImg,
        });
      }
      setTotalPage(res.data.total)
      setPageData(listDate);
    } catch (error) {
      // 错误处理
      console.error("Error fetching hot tags:", error);
    }
  }

  //获取标签列表
  async function fetchHotTags() {
    try {
      const res = await getAllHotTag();
      let listDate = []
      for (let i = 0; i < res.data.length; i++) {
        listDate.push({ value: res.data[i], label: res.data[i] });
      }
      setHotTags(listDate);
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
            <div className="search-space">
              <Select
                placeholder="请选择标签"
                value={tagValue}
                style={{
                  width: "100%",
                }}
                onChange={handleChange}
                options={hotTags}
              />
            </div>
          </Col>
          <Col span={8}>
            <Button type="primary" onClick={fetchGetPageData}>查询</Button>
          </Col>
        </Row>
      </div>

      {pageData && <Table tableColumns={columns} tableData={pageData} totalPage={totalPage}
      currPage={currPage} pageSize={10} onPageChange={handlePageChange}  ></Table>}
    </div>
  );
}

export default Project;

