const ChatBot = require("dingtalk-robot-sender");
const args = process.argv.slice();

function main(token, mobile) {
  const defaultOptions = {
    baseUrl: "https://oapi.dingtalk.com/robot/send",
    accessToken: token,
  };

  const texts = [
    "【提醒】记得喝水哦~",
    "【提醒】每天八杯水，健康一整天~",
    "【提醒】记得休息一下",
    "【提醒】别太累了，起来运动运动",
    "【提醒】专注工作，提高效率",
    "【提醒】没啥事，关心一下",
    "【提醒】重要的事情说三遍，喝水，喝水，喝水",
    "【提醒】坚持一下，马上就要下班啦！",
  ];

  var content = texts[Math.floor(Math.random() * texts.length)];
  const robot = new ChatBot(defaultOptions);

  const at = {
    atMobiles: [mobile],
    isAtAll: false,
  };
  // 快速发送文本消息
  robot.text(content, at).then((res) => {
    console.log("发送消息成功");
  });
}

if (!module.parent) {
  let token = args[2];
  let mobile = args[3];
  console.log("token", token, "\nmobile", mobile);
  main(token, mobile);
} else {
  // we were require()d from somewhere else
}
