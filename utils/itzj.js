const superagent = require("superagent"); //发送网络请求获取DOM
const cheerio = require("cheerio"); //能够像Jquery一样方便获取DOM节点
// const nodemailer = require("nodemailer"); //发送邮件的node插件
// const ejs = require("ejs"); //ejs模版引擎
// const fs = require("fs"); //文件读写
// const path = require("path"); //路径配置
const itzjUrl = "http://www.ithome.com/";
const { sendContent } = require("./index");
/**
 * 获取it之家数据
 */
function getItzjData() {
  superagent.get(itzjUrl).end(function(err, res) {
    if (err) {
      reject(err);
    }
    let $ = cheerio.load(res.text);
    let itemlist = $("#nnews .t-b.sel .nl").eq(0);
    const htmlData = [];
    itemlist.find("li").each(function(index, item) {
      var pic = $(this);
      let obj = new Object();
      let obj01 = new Object();
      let arr = new Array();
      (obj.tag = "text"), (obj.text = index + 1 + ":" + " ");
      obj01.tag = "a";
      obj01.text = pic.find("a").text();
      obj01.href = pic.find("a").attr("href") + pic.find("b").text();
      arr.push(obj) && arr.push(obj01);
      htmlData.push(arr);
    });
    sendContent("it之家首页最新数据（每一天对这个世界了解多一点🤛", htmlData);
  });
}

module.exports = {
  getItzjData
};
