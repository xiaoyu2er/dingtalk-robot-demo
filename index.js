const ChatBot = require("dingtalk-robot-sender");
const words = require("./words.json");
const args = process.argv.slice();
const prefix = "【提醒】";

function main(token, mobile) {
  var content = prefix + words[Math.floor(Math.random() * words.length)];

  console.log(content);

  if (!token || !mobile) {
    return;
  }

  const defaultOptions = {
    baseUrl: "https://oapi.dingtalk.com/robot/send",
    accessToken: token,
  };

  const robot = new ChatBot(defaultOptions);

  const at = {
    atMobiles: mobile.split(","),
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
}
