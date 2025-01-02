---
date: '2024-12-11T12:58:38+08:00'
draft: false
title: 'cloudflare saas 加速站点'
slug: '2'
---
需要 2 个域名 ，一个托管到 cloudflare ，一个不能托管到 cloudflare 。给访问者显示的是主域名 ，用来回源的是工具域名 。接下来我展示 origin.lxz.cloudns.be 是工具域名 ，blog.0031400.xyz 是主域名 。
![](https://img.meteorrain.site/i/BQACAgUAAxkBAAPSZ3YHXHcOXZq3iXdbUPQbPzxantgAAjoTAAKdMLFX-o9Em92k0bE2BA)
origin.lxz.cloudns.be 解析到网站的 ip 地址 ，或者域名 ，开启 cdn 代理 。
![](https://img.meteorrain.site/i/BQACAgUAAxkBAAPUZ3YHefPleeg_WUk_Hq8P30MAARO6AAI7EwACnTCxV8l0I01u_pXiNgQ)
ssl/tls 的自定义主机名选项栏 ，添加回退源 origin.lxz.cloudns.be
![](https://img.meteorrain.site/i/BQACAgUAAxkBAAPWZ3YHoWroJSIfHX6KMBQo9XOx3A8AAjwTAAKdMLFXa2s5mbEq04I2BA)
添加自定义主机名
![](https://img.meteorrain.site/i/BQACAgUAAxkBAAPYZ3YHujLeJHujuvN65tTa34bBNcwAAj0TAAKdMLFXeDwzczWCMX42BA)
填写主域名 ，我的 blog.0031400.xyz 已经在使用 ，现在用 test.0031400.xyz 代替演示 。
![](https://img.meteorrain.site/i/BQACAgUAAxkBAAPaZ3YHysYCvASwU6m4wMKXshq2pQ8AAj4TAAKdMLFXXmP7-r1KiRA2BA)
添加两条 txt 记录在主域名的 dns 系统
![](https://img.meteorrain.site/i/AgACAgUAAxkBAAPcZ3YH2Os54_yk3iH2Ofr0VM_4cPMAAnHCMRudMLFX69tyKSDP6K4BAAMCAAN5AAM2BA)
等待结果完成
![](https://img.meteorrain.site/i/AgACAgUAAxkBAAPeZ3YH6A3AKfzbJfH9LN83CYmtrnsAAnLCMRudMLFXynl49ycP_OABAAMCAAN3AAM2BA)
主域名指向一个域名 ，这个域名托管平台无要求 ，这样做是为了实现国内外分流加速 。

我这里主域名指向 cdn.0031400.xyz ，cdn.0031400.xyz 分两条 ，默认指向一个 cloudflare 的优选 ip ，境外线路指向 1.0.0.5
![](https://img.meteorrain.site/i/AgACAgUAAxkBAAPgZ3YH_m_ZsZMeNcaVa18R5zw4-UAAAnPCMRudMLFXirL4P2rj0HMBAAMCAAN5AAM2BA)
成果看 ，是不错的 ，解析失败的那些地区是因为我昨晚换了一个 dns 解析 ，目前存在缓存 。