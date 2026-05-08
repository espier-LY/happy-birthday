var imageEl = document.getElementById('image');
var hasChanged = false;

function goToSecond() {
    if (hasChanged) return;
    hasChanged = true;
    imageEl.src = '2.png';
}

// 监听整个文档的点击和触摸
document.addEventListener('click', goToSecond);
document.addEventListener('touchend', function(e) {
    e.preventDefault();
    goToSecond();
}, { passive: false });

// 预加载第二张图
var preloader = new Image();
preloader.src = '2.png';