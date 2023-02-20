const { post } = require("../request");

/**
 * 发送普通文字消息
 * @param {String} content 
 */
const sendText = content => {
  const params = {
    msg_type: "text",
    content: { text: content }
  };
  post(params);
};

/**
 * 发送 @ 消息
 * @param {String} content 
 */
const sendAt = content => {
  const all = '<at user_id="all">所有人</at>';
  const params = {
    msg_type: "text",
    receive_id: "all",
    content: { text: content + all }
  };
  post(params);
};

/**
 * 发送富文本消息
 * @param {String} title 必传
 * @param {String} text 如果不需要 text 请传递 false
 * @param {String, String} {hrefTitle, hrefLink} 如果不需要 @ 请传递 false
 * @param {String} imageKey 如果不需要 image 请传递 false
 */
const sendRichText = (title, text, { hrefTitle, hrefLink }, imageKey) => {
  console.log(title, text, hrefTitle, hrefLink, imageKey);
  const arr = [];
  if (text) {
    arr.push([{ tag: "text", text: text }]);
  }
  if (hrefTitle && hrefLink) {
    arr.push([
      { tag: "a", text: hrefTitle, href: hrefLink },
      { tag: "at", user_id: "all" }
    ]);
  }
  if (imageKey) {
    arr.push([{ tag: "img", image_key: imageKey, width: 300, height: 300 }]);
  }
  const params = {
    msg_type: "post",
    content: {
      post: {
        zh_cn: {
          title: title,
          content: arr
        }
      }
    }
  };
  console.log(params);
  post(params);
};

/**
 * 
 * @param {*} title 
 * @param {*} content 
 */
const sendContent = (title, content) => {
  console.log(title, content);
  let params = {
    msg_type: "post",
    content: {
      post: {
        zh_cn: {
          title: title,
          content: content
        }
      }
    }
  };
  post(params);
};

module.exports = {
  sendText,
  sendAt,
  sendRichText,
  sendContent
};
