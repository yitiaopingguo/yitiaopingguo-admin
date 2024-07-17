import React, { useEffect, useRef ,useState} from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "./quilSize.css";

const RichText = ({ text, onChange }) => {
  const quillRef = useRef(null);
  const [content, setContent] = useState(text || '');  
  //富文本modules配置
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // 加粗，斜体，下划线，删除线
    ["blockquote", "code-block"], // 引用，代码块
    [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
    [{ list: "ordered" }, { list: "bullet" }], // 列表
    [{ script: "sub" }, { script: "super" }], // 上下标
    [{ indent: "-1" }, { indent: "+1" }], // 缩进
    [{ direction: "rtl" }], // 文本方向
    [{ size: ["small", false, "large", "huge"] }], // 字体大小
    [{ header: [1, 2, 3, 4, 5, 6, false] }], // 几级标题
    [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
    [{ font: [] }], // 字体
    [{ align: [] }], // 对齐方式
    ["clean"], // 清除字体样式
    ["image", "video"], // 上传图片、上传视频               // remove formatting button
  ];

  //富文本配置
  const options = {
    modules: {
      toolbar: toolbarOptions,
    },
    placeholder: "书写你的内容",
    theme: "snow",
  };

  useEffect(() => {
    
    if (quillRef.current) {
      console.log(8888);
      const quill = new Quill(quillRef.current, options);
      // 设置初始值
      if (content) {
        quill.clipboard.dangerouslyPasteHTML(content);
      }
      // 监听文本变化
      quill.on("text-change", function (delta, oldDelta, source) {
        if (source === "user") {
          const content = quill.root.innerHTML;
          setContent(content);  
          onChange(content);
        }
      });
    }
   
  }, []);

  return (
    <div>
      <div ref={quillRef} style={{ height: 300 }} />
    </div>
  );
};

export default RichText;
