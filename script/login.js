"use strict";
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", () => {
    const username = usernameInput.value;
    const password = passwordInput.value;
    const oneUser = {
        username: username, password: password
    };
    fetch("https://blog.api.meteorrain.site/login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(oneUser)
    })
        .then((response) => {
        const status = response.status;
        if (status == 401) {
            alert("账号或密码错误");
            return;
        }
        return response.text();
    })
        .then(data => {
        if (data) {
            window.localStorage.setItem("token", data);
            window.localStorage.setItem("isLogin", "true");
            alert("登陆成功");
            window.location.href = "/admin.html";
        }
    });
});
