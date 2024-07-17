import React, { useState, useEffect } from "react";
import { getByIdArticle, updateArticle } from "@/api/user";
import { getUrlParam } from "../../utils/method";
import RichText from "../../components/D2-quill";
import {
  Card,
  Button,
  Space,
  Form,
  Input,
  Upload,
  Divider,
  message,
} from "antd";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { saveArticle } from "@/api/user";
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
  const id = getUrlParam("id");
  const [messageApi] = message.useMessage();
  const [form] = Form.useForm();
  const [articleContent, setEditorContent] = useState("");
  const handleEditorChange = (newContent) => {
    setEditorContent(newContent);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getByIdArticle(id);
      if (res.code === 200) {
        const { articleTitle, articleSummary, articleContent, articleThImg } =
          res.data;
        form.setFieldsValue({
          articleTitle,
          articleSummary,
        });
        setArticleThImg(articleThImg);
        handleEditorChange(articleContent);
        setTimeout(() => {
          setIsTextLoading(false); // 数据加载完成后更新状态
        });

        console.log(articleContent, 111);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  //提交表单
  const onFinish = async (values) => {
    values.articleThImg = articleThImg;
    if (id) {
      values.articleId = id
      const res = await updateArticle(values);
      if (res.code === 200) {
        messageApi.open({ type: "success", content: "编辑文章成功" });
      } else {
        messageApi.open({ type: "error", content: "编辑文章失败" });
      }
    } else {
      const res = await saveArticle(values);
      if (res.code === 200) {
        messageApi.open({ type: "success", content: "新增文章成功" });
      } else {
        messageApi.open({ type: "error", content: "新增文章失败" });
      }
    }
  };

  //重置表单
  const onReset = () => {
    form.resetFields();
  };

  //
  const [loading, setLoading] = useState(false);
  const [isTextLoading, setIsTextLoading] = useState(true);
  const [articleThImg, setArticleThImg] = useState();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      let url = `http://localhost:8099/common/download?name=${info.file.response.content}`;
      setLoading(false);
      setArticleThImg(url);
    }
  };
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
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
          <Form.Item label="封面图" name="articleThImg">
            <Upload
              action="http://localhost:8099/common/upload"
              showUploadList={false}
              listType="picture-card"
              onChange={handleChange}
            >
              {articleThImg ? (
                <img
                  src={articleThImg}
                  alt="avatar"
                  style={{
                    width: "100%",
                  }}
                />
              ) : (
                uploadButton
              )}
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
            {id && !isTextLoading ? (
              <RichText
                text={articleContent}
                onChange={handleEditorChange}
              ></RichText>
            ) : (
              !id && (
                <RichText
                  text={articleContent}
                  onChange={handleEditorChange}
                ></RichText>
              )
            )}
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
