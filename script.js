var imageEl = document.getElementById('image');
var container = document.getElementById('container');

// 确保第一张图立即显示
imageEl.src = '1.jpg';

// 切换到第二张图 - 设为全局函数供 HTML 调用
function goToSecond() {
    imageEl.src = '2.png';
}

// 点击切换
container.onclick = goToSecond;

// 移动端触摸切换
container.addEventListener('touchend', function(e) {
    e.preventDefault();
    goToSecond();
});

// 预加载第二张图
var preloader = new Image();
preloader.src = '2.png';