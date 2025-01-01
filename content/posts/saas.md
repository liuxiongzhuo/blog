---
date: '2024-12-11T12:58:38+08:00'
draft: false
title: 'cloudflare saas 加速站点'
slug: '2'
---
需要 2 个域名 ，一个托管到 cloudflare ，一个不能托管到 cloudflare 。给访问者显示的是主域名 ，用来回源的是工具域名 。接下来我展示 origin.lxz.cloudns.be 是工具域名 ，blog.0031400.xyz 是主域名 。
![1733903696517.png](https://image.meteorrain.site/file/bac1606b-f725-4a45-838f-bab778d02c2d.png)
origin.lxz.cloudns.be 解析到网站的 ip 地址 ，或者域名 ，开启 cdn 代理 。
![1733903871530.png](https://image.meteorrain.site/file/bcb3aa98-8600-4f84-822c-47384577a9c9.png)
ssl/tls 的自定义主机名选项栏 ，添加回退源 origin.lxz.cloudns.be
![1733903989521.png](https://image.meteorrain.site/file/0e347b6a-97d8-454c-a74f-1554f4bbf032.png)
添加自定义主机名
![1733904055517.png](https://image.meteorrain.site/file/58860841-f47b-4811-b328-5d873856a8b7.png)
填写主域名 ，我的 blog.0031400.xyz 已经在使用 ，现在用 test.0031400.xyz 代替演示 。
![1733904140517.png](https://image.meteorrain.site/file/6baf1ec7-e26d-41af-87a3-4c29a513d4eb.png)
添加两条 txt 记录在主域名的 dns 系统
![1733904213526.png](https://image.meteorrain.site/file/820c9a57-8be0-4b45-a755-655d86a9fb35.png)
等待结果完成
![1733904301517.png](https://image.meteorrain.site/file/4ade8b02-211e-4a6d-8117-deb386ac5ac4.png)
主域名指向一个域名 ，这个域名托管平台无要求 ，这样做是为了实现国内外分流加速 。

我这里主域名指向 cdn.0031400.xyz ，cdn.0031400.xyz 分两条 ，默认指向一个 cloudflare 的优选 ip ，境外线路指向 1.0.0.5
![1733904539521.png](https://image.meteorrain.site/file/61375661-42dc-4c7d-aa4e-9981558b5790.png)
成果看 ，是不错的 ，解析失败的那些地区是因为我昨晚换了一个 dns 解析 ，目前存在缓存 。