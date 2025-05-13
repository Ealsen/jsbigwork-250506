// 树形菜单折叠展开功能
function toggleSubmenu(element) {
    const parentLi = element.parentElement;
    parentLi.classList.toggle('active');

    // 添加动画效果
    const submenu = parentLi.querySelector('.submenu');
    if (submenu) {
        if (parentLi.classList.contains('active')) {
            submenu.style.maxHeight = submenu.scrollHeight + 'px';
        } else {
            submenu.style.maxHeight = '0';
        }
    }
}


// 初始化菜单动画样式
function initMenuAnimation() {
    const submenus = document.querySelectorAll('.submenu');
    submenus.forEach(submenu => {
        submenu.style.maxHeight = '101px';
        submenu.style.transition = 'max-height 0.3s ease-out';
    });
}

/**
 * 显示个人信息页面的函数
 * 该函数通过iframe模态框的方式展示个人信息页面
 * 
 * 实现步骤：
 * 1. 获取iframe元素和关闭按钮的DOM引用
 * 2. 设置iframe的源地址为personal.html
 * 3. 显示iframe和关闭按钮
 */
function showPersonal() {
    const frame = document.getElementById('personalFrame');
    const closeBtn = document.getElementById('closeButton');
    frame.src = './personal.html';
    frame.style.display = 'block';
    closeBtn.style.display = 'block';
}

/**
 * 关闭个人信息页面的函数
 * 该函数负责隐藏iframe模态框和清理相关资源
 * 
 * 实现步骤：
 * 1. 获取iframe元素和关闭按钮的DOM引用
 * 2. 隐藏iframe和关闭按钮
 * 3. 清空iframe的源地址以释放资源
 */
function closePersonal() {
    const frame = document.getElementById('personalFrame');
    const closeBtn = document.getElementById('closeButton');
    frame.style.display = 'none';
    closeBtn.style.display = 'none';
    frame.src = '';
}

// 页面加载时初始化
window.onload = function () {
    // 初始化菜单动画
    initMenuAnimation();

    // 关闭按钮点击事件
    document.getElementById('closeButton').addEventListener('click', closePersonal);

    // 点击iframe外部关闭
    document.addEventListener('click', function (event) {
        const frame = document.getElementById('personalFrame');
        const closeBtn = document.getElementById('closeButton');
        if (frame.style.display === 'block' &&
            !frame.contains(event.target) &&
            !closeBtn.contains(event.target) &&
            !document.querySelector('.logo-text').contains(event.target)) {
            closePersonal();
        }
    });

    // ESC键关闭
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closePersonal();
        }
    });


    // 其他动态效果

    // sakura
    const script = document.createElement('script');
    script.src = 'src\\sakura-less.js';
    document.head.appendChild(script);

    // jQuery
    const script1 = document.createElement('script');
    script1.src = 'src\\jquery-3.7.1.min.js';
    document.head.appendChild(script1);

    // myhkw
    const script2 = document.createElement('script');
    script2.src = 'https://myhkw.cn/api/player/demo';
    script2.setAttribute('id', 'myhk');
    script2.setAttribute('key', 'demo');
    script2.setAttribute('m', '1');
    document.head.appendChild(script2);
}; 