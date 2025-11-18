# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2] - 2025-11-18

### Added
- 根据页面协议（HTTP/HTTPS）动态选择 mock.js 加载地址
  - HTTPS 页面加载 `https://localhost:3366/mock.js`
  - HTTP 页面加载 `http://localhost:3354/mock.js`
- 新增对多个端口的支持：
  - 端口 3000
  - 端口 10088
  - 端口 8080（原有）

### Changed
- 将 mock.js URL 从硬编码改为动态选择
- 扩展 @match 规则以支持 HTTP 和 HTTPS 协议

## [0.1] - 2025-11-18

### Added
- 初始版本发布
- 在 AMH 内网页面（web.amh-group.com:8080）自动加载本地 mock.js
- 支持 document-start 时机注入，确保尽早加载
