// mock/index.js

import Mock from "mockjs";

// 使用Mock.js模拟接口数据
Mock.mock("/api/article/list", "get", {
  "list|6": [
    {
      "id|+1": 1,
      'img': "https://image.fosunholiday.com/fostay-platform/test/086511b29db9ea874557a3d30b033df6.jpg",
      'title': "我是title",
      "gender|1": ["男", "女"],
      'content':
        "本产品下单后，淡季需要至少提前3天预约，平季需要至少提前5天预约，旺季需要至少提前10天预约。下载“托迈酷客”APP",
    },
  ],
});
