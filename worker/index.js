const schedule = require("node-schedule");
const { morning, afternoon, night } = require("../utils/timing");

// 每天早上九点执行
schedule.scheduleJob("0 9 * * *", function() {
  morning();
  console.log("任务执行时间：", new Date());
});

// 每天中午 12 点执行
schedule.scheduleJob("0 12 * * *", function() {
  afternoon();
  console.log("任务执行时间：", new Date());
});

// 每天晚上 6 点执行
schedule.scheduleJob("0 18 * * *", function() {
  night();
  console.log("任务执行时间：", new Date());
});
