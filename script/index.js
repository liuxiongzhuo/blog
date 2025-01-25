import { getURLParams, getDate } from "./utils.js";
const listDiv = document.getElementById("list");
const page = getURLParams()["page"] || 1;
fetch("https://blog.api.meteorrain.site/list.php?page=" + page)
    .then(response => response.json())
    .then(data => {
    for (let i = 0; i < data.length; i++) {
        const link = document.createElement("a");
        link.href = "/post.html?id=" + data[i].id;
        link.className = "item-link";
        const itemDiv = document.createElement("div");
        const itemCoverDiv = document.createElement("img");
        itemCoverDiv.className = "item-cover";
        itemCoverDiv.src = data[i].cover;
        itemCoverDiv.onerror = () => { itemCoverDiv.src = "https://img.meteorrain.site/i/BQACAgUAAxkDAAID7WeDkF-1Jbf7sKH2JkjzlUf-SAuXAAKXFAACom8gVEOvS-KVUsf6NgQ.png"; };
        const itemtitleDiv = document.createElement("div");
        itemtitleDiv.innerText = data[i].title;
        itemtitleDiv.className = "item-title";
        const itemtimeDiv = document.createElement("div");
        itemtimeDiv.innerText = getDate(data[i].time);
        itemtimeDiv.className = "item-time";
        const itembriefDiv = document.createElement("div");
        itembriefDiv.innerText = data[i].brief;
        itembriefDiv.className = "item-brief";
        itemDiv.append(itemCoverDiv);
        itemDiv.append(itemtitleDiv);
        itemDiv.append(itemtimeDiv);
        itemDiv.append(itembriefDiv);
        itemDiv.className = "item";
        link.append(itemDiv);
        listDiv.append(link);
    }
});
const loginButton = document.getElementById("login");
loginButton.addEventListener("click", () => {
    const isLogin = window.localStorage.getItem("isLogin");
    if (!isLogin || isLogin == "false") {
        window.location.href = "/login.html";
        alert("未登录");
    }
    else {
        window.location.href = "/admin.html";
    }
});
