var imageEl = document.getElementById('image');
var hiddenBtn = document.getElementById('hiddenBtn');

function goToSecond() {
    imageEl.src = '2.png';
    hiddenBtn.style.display = 'none';
}

hiddenBtn.onclick = goToSecond;

// 预加载第二张图
var preloader = new Image();
preloader.src = '2.png';