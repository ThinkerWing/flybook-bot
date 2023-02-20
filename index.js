const { sendText, sendAt, sendRichText } = require("./utils");
const schedule = require("node-schedule");
const { weatherApi } = require("./config/local");
const { get } = require("./request");
const { morning, afternoon, night } = require("./utils/timing");
const { getItzjData } = require('./utils/itzj')
const { hotSearch } = require("./utils/weibo")

// 创建一个每 10 秒钟执行一次的定时任务
schedule.scheduleJob("*/5 * * * * *", function() {
  // morning()
  // afternoon()
  // night()
//   getItzjData()
//   hotSearch()
  console.log("每十秒钟执行一次");
});

// 发送文本
// sendText('hello')

// content + @ 所有人
// sendAt('hello')

// 只发标题和文本
// sendRichText('我是标题', '我是文本')

// 发标题和文本和超链接并 @ 所有人
// sendRichText("我是标题", "我是文本", {
//   hrefTitle: "刷掘金",
//   hrefLink: "https://juejin.cn/"
// });

// 发标题和超链接并 @ 所有人 但是不发送文本
// sendRichText("我是标题", false, {
//   hrefTitle: "刷掘金",
//   hrefLink: "https://juejin.cn/"
// });

// 发送标题、文本、超链接、图片
// sendRichText("我是标题", 'hello', {
//   hrefTitle: "刷掘金",
//   hrefLink: "https://juejin.cn/"
// }, "img_v2_65163a7c-530c-4be6-ac3a-68c9a74cd46g");
