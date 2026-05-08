/**
 * HappyBirthday - 脚本
 * 功能：点击切换图片，预加载第二张图
 * 移动端兼容优化
 */

(function() {
    'use strict';

    // 元素引用
    const image = document.getElementById('image');

    // 图片路径
    const image2 = '2.png';

    // 状态标记
    let isSwitched = false;

    // 切换到第二张图片
    function switchImage() {
        if (isSwitched) return;
        isSwitched = true;
        image.src = image2;
    }

    // 页面加载完成后初始化
    function init() {
        // 预加载第二张图片
        var preloader = new Image();
        preloader.src = image2;

        // 绑定点击事件（多种事件确保兼容）
        document.body.addEventListener('click', switchImage);
        document.body.addEventListener('touchend', switchImage);
    }

    // 页面加载完成后立即初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();