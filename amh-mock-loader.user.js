// ==UserScript==
// @name         AMH Mock Loader
// @namespace    https://github.com/hqwuzhaoyi/amh-mock-loader-userscript
// @version      0.2
// @description  在 AMH 内网页面自动加载本地 mock.js
// @author       hqwuzhaoyi
// @license      MIT; https://opensource.org/licenses/MIT
// @match        https://web.amh-group.com:8080/*
// @match        http://web.amh-group.com:8080/*
// @match        https://web.amh-group.com:3000/*
// @match        http://web.amh-group.com:3000/*
// @match        https://web.amh-group.com:10088/*
// @match        http://web.amh-group.com:10088/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function injectMock() {
        const script = document.createElement('script');
        // 根据当前页面协议选择对应的 mock.js URL
        const isHttps = window.location.protocol === 'https:';
        script.src = isHttps ? 'https://localhost:3366/mock.js' : 'http://localhost:3354/mock.js';
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
