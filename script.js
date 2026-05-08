/**
 * HappyBirthday - 脚本
 * 功能：点击切换图片，预加载第二张图
 */

(function() {
    'use strict';

    // 元素引用
    const container = document.getElementById('container');
    const image = document.getElementById('image');

    // 图片路径
    const image1 = '1.jpg';
    const image2 = '2.png';

    // 状态标记：是否已切换
    let isSwitched = false;

    // 已切换标记，禁止重复切换
    function switchToImage2() {
        if (isSwitched) return;
        isSwitched = true;
        image.src = image2;
        // 移除点击监听，防止重复触发
        document.removeEventListener('click', switchToImage2);
        document.removeEventListener('touchstart', switchToImage2);
    }

    // 页面加载完成后立即显示首图并预加载第二张
    function init() {
        // 图片加载完成后显示容器（避免白屏闪烁）
        if (image.complete) {
            container.classList.add('visible');
        } else {
            image.addEventListener('load', function() {
                container.classList.add('visible');
            });
            image.addEventListener('error', function() {
                // 图片加载失败也显示容器（保持功能可用）
                container.classList.add('visible');
            });
        }

        // 预加载第二张图片
        const preloader = new Image();
        preloader.src = image2;

        // 绑定点击事件（PC和移动端通用）
        document.addEventListener('click', switchToImage2);
        document.addEventListener('touchstart', switchToImage2, { passive: true });
    }

    // DOM加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();