// 点击复制邮件
document.addEventListener("DOMContentLoaded", function () {
    var link = document.querySelector('a[href="mailto:ahfi@qq.com"]');

    link.addEventListener("click", function (event) {
        event.preventDefault();
        var email = "ahfi@qq.com";

        var tempInput = document.createElement("textarea");
        tempInput.value = email;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        alert("已复制邮箱地址：" + email);
    });
});