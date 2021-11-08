# dingtalk-robot-demo

钉钉机器人 demo 配合 Github Action 实现一个机器人可以定时提醒女朋友喝水

![image](https://user-images.githubusercontent.com/10123916/137683187-df78477a-4ce9-4213-879c-0c5d9dc6b6e1.png)


# 步骤
### 0. 建个钉钉群
把女朋友拉进来

### 1. 钉钉设置一个机器人

钉钉群 -> 设置 -> 智能群助手 -> 添加机器人 -> 自定义机器人

【注意】在机器人管理需要设置*安全设置*，简单期间可以设置自定义关键词，比如【提醒】

获得 webhook 地址，例如 https://oapi.dingtalk.com/robot/send?access_token=xx, 复制 access_token

### 2. fork 本仓库
### 3.1 修改 words.json
### 3.2 设置 Action Security
增加两个 secrets: TOKEN, MOBILE, 其中 TOKEN 即 第一步获得的 access_token, MOBILE 为群众需要 at 的用户手机号

![image](https://user-images.githubusercontent.com/10123916/137683825-6007b802-a3c8-4f59-b894-0d236dfba353.png)


### 4. 修改定时任务执行时间
文件地址 .github/workflows/dingtalk.yml

```
on: 
  push:
    branches: 
      - master
  schedule:
  # 分钟 小时 日期 月份 星期
    - cron:  "0 2,3,6,7,8,9 * * *"
```
【注意】这里的小时并不是北京时间，北京时间需要减 8 个小时，所以这里的含义是
1. 每次 push 到 master 时执行
2. 北京时间 10、11、14、15、16、17 时执行
