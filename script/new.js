import { getDate } from "./utils.js";
import { marked } from "./marked.js";
marked.use({
    breaks: true
});
const titleInput = document.getElementById("title");
const coverInput = document.getElementById("cover");
const briefInput = document.getElementById("brief");
const timeInput = document.getElementById("time");
const contentInput = document.getElementById("content");
const updateButton = document.getElementById("update");
const time = Date.now();
timeInput.value = getDate(time);
updateButton.addEventListener("click", () => { update(time); });
function update(time) {
    const data = {
        title: titleInput.value,
        cover: coverInput.value,
        brief: briefInput.value,
        time: time,
        content: contentInput.value,
    };
    fetch("https://blog.api.meteorrain.site/new.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "token": window.localStorage.getItem("token") || ""
        },
        body: JSON.stringify(data)
    })
        .then(response => {
        if (response.status == 401) {
            alert("登录无效");
            window.location.pathname = "/login.html";
        }
        return response.text();
    })
        .then(data => {
        if (data == "ok") {
            alert("ok");
            window.location.pathname = "/admin.html";
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
const previewDiv = document.getElementById("preview");
contentInput.addEventListener("input", (e) => {
    previewDiv.innerHTML = marked.parse(contentInput.value);
});
