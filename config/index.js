const baseUrl = "https://open.feishu.cn/open-apis/bot/v2/hook/webhookId";
const weather = {
  appid: "appid",
  appsecret: "appsecret"
};
const weatherApi = `https://www.yiketianqi.com/free/day?appid=${weather.appid}&appsecret=${weather.appsecret}&unescape=1&cityid=101210101`;
module.exports = {
  baseUrl,
  weatherApi
};
