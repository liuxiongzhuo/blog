import { getURLParams, getDate } from "./utils.js";
import { marked } from "./marked.js";
marked.use({
    breaks: true
});
const titleDiv = document.getElementById("title");
const timeDiv = document.getElementById("time");
const contentDiv = document.getElementById("content");
const id = getURLParams()["id"];
fetch("https://blog.api.meteorrain.site/post.php?id=" + id)
    .then(response => response.json())
    .then(data => {
    titleDiv.textContent = data.title;
    timeDiv.textContent = getDate(data.time);
    contentDiv.innerHTML = marked.parse(data.content);
});
