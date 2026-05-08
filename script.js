var imageEl = document.getElementById('image');

imageEl.onclick = function() {
    imageEl.src = '2.png';
};

// 预加载第二张图
var preloader = new Image();
preloader.src = '2.png';