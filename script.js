var imageEl = document.getElementById('image');

function handleTap() {
    imageEl.src = '2.png';
}

imageEl.addEventListener('click', handleTap);
imageEl.addEventListener('touchstart', function(e) {
    e.preventDefault();
    handleTap();
}, { passive: false });

// 预加载第二张图
var preloader = new Image();
preloader.src = '2.png';