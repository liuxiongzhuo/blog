---
date: '2025-01-02T15:41:08+08:00'
draft: false
title: 'HugoSshGit自动部署'
slug: '4'
---
应用需求:

本地使用 hugo 制作静态网站 , git push 到 github , 然后 ssh 登录远程主机 , 到对应目录执行 git pull 命令 .

使用方式:

把该脚本放到 hugo 项目的根目录 , 命名为 deploy.bat 等 , 命令行执行 ./deploy.bat , 或者鼠标双击打开 .

使用注意事项:

需要安装 putty 软件 , 需要把对应的 plink.exe 目录和 ssh 账号密码主机以及远程主机的 hugo 网站目录填成自己的 , 需要在根目录的 .gitignore 文件添加脚本文件名 , 防止 ssh 账号密码泄露 
```bat
rd /q /s .\public
hugo
git add .
git commit -m "%DATE% %TIME%"
git push
cd "你的plink.exe所在位置"
echo | plink.exe -pw "ssh密码" "ssh账号"@"远程主机" "cd "远程主机的 hugo 目录";git pull"
```
