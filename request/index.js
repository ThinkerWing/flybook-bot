// 避免泄漏真实地址导致的恶意调用
// const baseUrl = require("../config");
const { baseUrl } = require("../config/local");
const axios = require("axios");

/* 封装get方法
 * @param url 
 * @param params 
 * @returns {Promise}
 */
const get = function(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

/**
* 封装post请求
* @param data
* @returns {Promise}
*/
const post = function(data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(baseUrl, data).then(
      response => {
        resolve(response.data);
      },
      err => {
        reject(err);
      }
    );
  });
};

module.exports = {
  get,
  post
};
