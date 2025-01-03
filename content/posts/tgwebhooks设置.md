---
date: '2025-01-03T13:24:08+08:00'
draft: false
title: 'tgwebhooks设置'
slug: '5'
---
**本文来源于 grammy webhooks 官方教程 [https://grammy.dev/zh/guide/deployment-types](https://grammy.dev/zh/guide/deployment-types)**
- 使用网站管理 [https://telegram.tools/webhook-manager](https://telegram.tools/webhook-manager)

![BQACAgUAAxkBAAICE2d3drdhnhCPe1qGJirB70sJcNqjAAKYFAACwai5V9HJzCVvI6YoNgQ](https://img.meteorrain.site/i/BQACAgUAAxkBAAICE2d3drdhnhCPe1qGJirB70sJcNqjAAKYFAACwai5V9HJzCVvI6YoNgQ)
- hono 代码发送设置信息 , 注意只用发送一次
```ts
const endpoint = "你的url"
bot.api.setWebhook(endpoint);
```
- http 发送请求设置 , 这是以上方法的底层原理
[https://api.telegram.org/bot<token>/setWebhook?url="你的url"](https://api.telegram.org/bot<token>/setWebhook?url="你的url")