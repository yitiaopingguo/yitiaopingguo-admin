import React, { useState, useEffect } from "react";
import { getAllHotTag } from "@/api/user";
import RichText from "../../components/D2-quill";
import { Card, Button, Space, Form, Input, Upload, Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./Article.scss";

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 22,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 20,
    span: 4,
  },
};

function ArticleDetail() {
  const [form] = Form.useForm();
  const [articleContent, setEditorContent] = useState('');
  const handleEditorChange = (newContent) => {  
    setEditorContent(newContent);
  };  


  //获取标签列表
  const hanleSave = () => {
    console.log(2222222222);
  };

  const onFinish = (values) => {
    console.log(values);
  };

  //重置表单
  const onReset = () => {
    form.resetFields();
  };
  return (
    <div className="M-table">
      <Card title="基础信息">
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="articleTitle"
            label="文章标题"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="请输入文章标题" />
          </Form.Item>
          <Form.Item
            name="articleSummary"
            label="文章摘要"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="请输入文章摘要" />
          </Form.Item>
          <Form.Item label="封面图" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>封面图</div>
              </div>
            </Upload>
          </Form.Item>
          <Divider />
          <h3>文章内容</h3>
          <Divider />
          <Form.Item
            name="articleContent"
            label=""
            rules={[
              {
                required: true,
              },
            ]}
          >
            <RichText value={articleContent}  
        onChange={handleEditorChange} ></RichText>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Button type="primary" htmlType="submit">
                保存
              </Button>
              <Button htmlType="button" onClick={onReset}>
                重置
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default ArticleDetail;
