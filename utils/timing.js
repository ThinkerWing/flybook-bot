const { get } = require("../request");
const { weatherApi } = require("../config/local");
const { sendRichText } = require("./index");
// 避免泄漏真实地址导致的恶意调用
// const {weatherApi} = require('../config')

// {
//   nums: 9,
//   cityid: '101210101',
//   city: '杭州',
//   date: '2023-02-20',
//   week: '星期一',
//   update_time: '10:43',
//   wea: '雾',
//   wea_img: 'wu',
//   tem: '8',
//   tem_day: '14',
//   tem_night: '6',
//   win: '南风',
//   win_speed: '2级',
//   win_meter: '7km/h',
//   air: '88',
//   pressure: '1015',
//   humidity: '82%'
// }
const morning = () => {
  get(weatherApi).then(res => {
    let str = "";
    str += `今天是${res.week}, 天气${res.wea}。`;
    if (res.wea.split("").includes("雨")) {
      str += "宝,今天下雨了,出门记得带伞.";
    }
    console.log(str);
    sendRichText(
      "早上好",
      str,
      {
        hrefTitle: "今日热搜",
        hrefLink: "https://s.weibo.com/top/summary?cate=realtimehot"
      },
      "img_v2_a0960f21-38e8-4e60-aa0e-29f2740d1b4g"
    );
  });
};

const afternoon = () => {
  sendRichText(
    "干饭啦！！！",
    "干饭不积极，思想有问题！",
    {
      hrefTitle: "探店",
      hrefLink:
        "https://www.xiaohongshu.com/mobile/tags/2306121824509403675?name=%E6%8E%A2%E5%BA%97"
    },
    "img_v2_65163a7c-530c-4be6-ac3a-68c9a74cd46g"
  );
  console.log("干饭不积极，思想有问题！");
};

const night = () => {
  sendRichText(
    "下班了, 不要忘记打卡！！！",
    "我下班了蟹老板，我要说的是，如果有一天，我真的实现了我生命中的梦想，我永远也不会让我的双脚站在这油污的地板上。",
    false,
    "img_v2_faf6411c-166a-4ecf-802f-5701c245c65g"
  );
  console.log("我下班了蟹老板，我要说的是，如果有一天，我真的实现了我生命中的梦想，我永远也不会让我的双脚站在这油污的地板上");
};

module.exports = {
  morning,
  afternoon,
  night
};
