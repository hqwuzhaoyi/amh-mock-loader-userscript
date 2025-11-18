// ==UserScript==
// @name         AMH Mock Loader
// @namespace    https://github.com/hqwuzhaoyi/amh-mock-loader-userscript
// @version      0.1
// @description  在 AMH 内网页面自动加载本地 mock.js
// @author       hqwuzhaoyi
// @license      MIT; https://opensource.org/licenses/MIT
// @match        https://web.amh-group.com:8080/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function injectMock() {
        const script = document.createElement('script');
        script.src = 'https://localhost:3366/mock.js';
        script.type = 'text/javascript';
        script.async = false; // 尽量保证按顺序执行

        // 有 head 就塞 head，没有就塞到 html 根上
        (document.head || document.documentElement).appendChild(script);
    }

    if (document.readyState === 'loading') {
        // 尽早插入，等 DOM 就绪再挂 script
        document.addEventListener('DOMContentLoaded', injectMock, { once: true });
    } else {
        injectMock();
    }
})();
