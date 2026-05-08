var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');

function goToSecond() {
    image1.style.display = 'none';
    image2.style.display = 'block';
}

// 3秒后自动跳转
setTimeout(goToSecond, 3000);