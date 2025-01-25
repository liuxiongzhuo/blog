import { getURLParams, getDate } from "./utils.js";
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
const id = getURLParams()["id"];
let time;
fetch("https://blog.api.meteorrain.site/post.php?id=" + id)
    .then(response => response.json())
    .then(data => {
    titleInput.value = data.title;
    time = data.time;
    timeInput.value = getDate(time);
    contentInput.value = data.content;
    coverInput.value = data.cover;
    briefInput.value = data.brief;
    previewDiv.innerHTML = marked.parse(contentInput.value);
});
updateButton.addEventListener("click", () => { update(); });
function update() {
    const data = {
        id: Number(id),
        title: titleInput.value,
        cover: coverInput.value,
        brief: briefInput.value,
        time: new Date(timeInput.value).getTime(),
        content: contentInput.value,
    };
    fetch("https://blog.api.meteorrain.site/update.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            token: window.localStorage.getItem("token") || ""
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
const backButton = document.getElementById("back");
backButton.addEventListener("click", () => { history.back(); });
