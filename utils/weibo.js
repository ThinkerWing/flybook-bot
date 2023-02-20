const { sendContent } = require("./index");
const { get } = require("../request");

const url = "https://weibo.com/ajax/statuses/hot_band";
const hotSearch = () => {
  get(url).then(res => {
    const data = res.data.band_list;
    const title = data.map((item, index) => {
      return [
        {
          tag: "text",
          text: `${index + 1}: `
        },
        {
          tag: "a",
          text: item["note"],
          href: `https://s.weibo.com/weibo?q=${item["note"]}`
        }
      ];
    });
    sendContent("微博热搜", title.slice(0, 10));
  });
};

module.exports = {
  hotSearch
};
