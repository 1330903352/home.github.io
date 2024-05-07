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


// 右键菜单功能
document.addEventListener('DOMContentLoaded', function() {
    var contextMenu = document.getElementById('context-menu');
    
    // 阻止默认右键菜单
    document.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        
        // 显示自定义右键菜单
        contextMenu.style.display = 'block';
        contextMenu.style.left = event.pageX + 'px';
        contextMenu.style.top = event.pageY + 'px';
    });
  
    // 点击页面其他地方隐藏右键菜单
    document.addEventListener('click', function() {
        contextMenu.style.display = 'none';
    });
  
    // 添加菜单项点击事件
    document.getElementById('menu-home').addEventListener('click', function() {
        window.location.href = 'https://home.ahfi.cn';
    });
  
    document.getElementById('menu-refresh').addEventListener('click', function() {
        location.reload();
    });
    // 添加博客菜单
    document.getElementById('menu-blog').addEventListener('click', function() {
        window.open('https://www.ahfi.cn', '_blank');
    });
    // 添加API接口菜单
    document.getElementById('menu-api').addEventListener('click', function() {
        window.open('https://api.ahfi.cn', '_blank');
    });
    // 添加书签菜单
    document.getElementById('menu-bookmark').addEventListener('click', function() {
        window.open('https://www.ahfi.cn/bookmarks.html', '_blank');
    });
});


document.getElementById('menu-search').addEventListener('click', function() {
    // 创建一个模态框容器
    var modalContainer = document.createElement('div');
    modalContainer.classList.add('modal', 'fade');
    modalContainer.setAttribute('id', 'searchModal');
    modalContainer.setAttribute('tabindex', '-1');
    modalContainer.setAttribute('role', 'dialog');
    modalContainer.setAttribute('aria-labelledby', 'searchModalLabel');
    modalContainer.setAttribute('aria-hidden', 'true');

    // 创建模态框内容
    modalContainer.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="searchModalLabel">请输入搜索内容：</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input type="text" class="form-control" id="searchText" placeholder="搜索内容">
                </div>
                <div class="modal-footer justify-content-center">
                    <button type="button" class="btn btn-primary" id="searchBtn">搜索</button>
                </div>
            </div>
        </div>
    `;

    // 将模态框添加到页面中
    document.body.appendChild(modalContainer);

    // 初始化模态框
    var searchModal = new bootstrap.Modal(document.getElementById('searchModal'));

    // 显示模态框
    searchModal.show();

    // 添加搜索按钮点击事件
    document.getElementById('searchBtn').addEventListener('click', function() {
        var searchText = document.getElementById('searchText').value;
        if(searchText) {
            var searchUrl = 'https://www.ahfi.cn/?s=' + encodeURIComponent(searchText);
            window.location.href = searchUrl;
        }
    });
});


