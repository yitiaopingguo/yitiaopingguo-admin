import React, { useState, useEffect } from "react";
import Table from "../../components/Table";
import { useNavigate } from "react-router-dom";
import { getPageData, getAllHotTag, deleteArticle } from "@/api/user";
import { Space, Button, Input, Col, Row, Select, message } from "antd";
import "./Article.scss";

function Article() {
  // 创建路由钩子
  const navigate = useNavigate();
  const [messageApi] = message.useMessage();
  const [pageData, setPageData] = useState(null); // 初始状态设置为null或空数组
  const [hotTags, setHotTags] = useState(null); // 初始状态设置为null或空数组
  const [titleValue, setTitleValue] = useState("");
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
          <Button type="primary">编辑</Button>
          <Button type="primary" danger onClick={() => handleDel(record.key)}>
            删除
          </Button>
        </Space>
      ),
    },
  ];
  //选择标签select
  const handleChange = (value) => {
    setTagValue(value);
  };
  // 这是父组件提供的回调函数，用于处理页码的改变
  const handlePageChange = (newPage) => {
    setCurrPage(newPage);
  };
  useEffect(() => {
    fetchGetPageData();
  }, [currPage]);
  useEffect(() => {
    // fetchHotTags();
  }, []);

  async function fetchGetPageData() {
    try {
      let data = {
        pageNum: currPage || 1,
        pageSize: 10,
        param: {
          articleTitle: titleValue,
          // title: titleValue,
          // tag: tagValue,
        },
      };
      const res = await getPageData(data);
      if (res.code === 200) {
        let listDate = [];
        for (let i = 0; i < res.data.length; i++) {
          listDate.push({
            key: res.data[i].articleId,
            articleTitle: res.data[i].articleTitle,
            articleThImg: res.data[i].articleThImg,
          });
        }
        setTotalPage(res.total);
        setPageData(listDate);
      }
    } catch (error) {
      // 错误处理
      console.error("Error fetching hot tags:", error);
    }
  }

  //获取标签列表
  async function fetchHotTags() {
    try {
      const list = await getAllHotTag();
      let listDate = [];
      for (let i = 0; i < list.length; i++) {
        listDate.push({ value: list[i], label: list[i] });
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

  //新增
  const handleAdd = () => {
    navigate("/Article/detail");
  };

  //删除
  const handleDel = async (id) => {
    const res = await deleteArticle(id);
    if (res.code === 200) {
      fetchGetPageData();
      messageApi.open({ type: "success", content: "删除成功" });
    } else {
      messageApi.open({ type: "error", content: "删除失败" });
    }
  };

  return (
    <div className="M-table">
      <div className="search-con">
        <Row>
          <Col span={8}>
            <div className="search-space">
              <Input
                placeholder="请输入文章标题"
                value={titleValue}
                onChange={handleInputChange}
              />
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
            <Button type="primary" onClick={fetchGetPageData}>
              查询
            </Button>
          </Col>
        </Row>
      </div>
      <div className="table-title">
        <span>文章列表</span>
        <Button type="primary" onClick={handleAdd}>
          新建
        </Button>
      </div>
      {pageData && (
        <Table
          tableColumns={columns}
          tableData={pageData}
          totalPage={totalPage}
          currPage={currPage}
          pageSize={10}
          onPageChange={handlePageChange}
        ></Table>
      )}
    </div>
  );
}

export default Article;
