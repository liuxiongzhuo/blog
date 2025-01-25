const isLogin = window.localStorage.getItem("isLogin");
if (!isLogin || isLogin == "false") {
    alert("未登录");
    window.location.href = "/";
}
import { getURLParams, getDate } from "./utils.js";
const listDiv = document.getElementById("list");
const page = getURLParams()["page"] || 1;
fetch("https://blog.api.meteorrain.site/list.php?page=" + page)
    .then(response => response.json())
    .then(data => {
    for (let i = 0; i < data.length; i++) {
        const itemDiv = document.createElement("div");
        itemDiv.addEventListener("mouseover", () => {
            itemDiv.style.backgroundColor = "#dcdcdc";
        });
        itemDiv.addEventListener("mouseout", () => {
            itemDiv.style.backgroundColor = "#ffff";
        });
        const itemtitleDiv = document.createElement("div");
        itemtitleDiv.innerText = data[i].title;
        itemtitleDiv.className = "item-title";
        const itemtimeDiv = document.createElement("div");
        itemtimeDiv.innerText = getDate(data[i].time);
        itemtimeDiv.className = "item-time";
        const itembriefDiv = document.createElement("div");
        itembriefDiv.innerText = data[i].brief;
        const detailDiv = document.createElement("div");
        detailDiv.className = "item-left";
        itembriefDiv.className = "item-brief";
        const itemEditDiv = document.createElement("img");
        const buttonDiv = document.createElement("div");
        buttonDiv.className = "item-right";
        itemEditDiv.src = "./img/edit.svg";
        itemEditDiv.addEventListener("click", () => {
            window.location.href = "/edit.html?id=" + data[i].id;
        });
        itemEditDiv.className = "button";
        const itemDelDiv = document.createElement("img");
        itemDelDiv.className = "button";
        itemDelDiv.src = "./img/not.svg";
        itemDelDiv.addEventListener("click", () => {
            if (confirm("确认")) {
                fetch("https://blog.api.meteorrain.site/delete.php?id=" + data[i].id, {
                    method: "POST",
                    headers: {
                        "token": window.localStorage.getItem("token") || ""
                    }
                })
                    .then(response => response.text())
                    .then(data => {
                    if (data == "ok") {
                        alert("ok");
                        window.location.href = "/admin.html";
                    }
                    else {
                        alert("fail");
                    }
                })
                    .catch((err) => {
                    alert("fail");
                    console.error(err);
                });
            }
        });
        detailDiv.append(itemtitleDiv);
        detailDiv.append(itemtimeDiv);
        detailDiv.append(itembriefDiv);
        buttonDiv.append(itemEditDiv);
        buttonDiv.append(itemDelDiv);
        itemDiv.append(detailDiv);
        itemDiv.append(buttonDiv);
        itemDiv.className = "item";
        listDiv.append(itemDiv);
    }
});
const logoutButton = document.getElementById("logout");
logoutButton.addEventListener("click", () => {
    window.localStorage.removeItem("token");
    window.localStorage.setItem("isLogin", "false");
    alert("退出登录成功");
    window.location.href = "/";
});
