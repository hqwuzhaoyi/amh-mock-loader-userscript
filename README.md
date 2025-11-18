# AMH Mock Loader

一个用于在 AMH 内网页面自动加载本地 mock.js 的用户脚本（Userscript）。

## 功能特性

- 🔄 根据页面协议（HTTP/HTTPS）自动选择对应的 mock.js 地址
- 🚀 在 `document-start` 时机注入，确保尽早加载
- 🎯 支持多个端口：8080、3000、10088
- 🔒 同时支持 HTTP 和 HTTPS 协议

## 工作原理

该脚本会根据当前页面的协议自动选择加载不同的本地 mock 服务：

- **HTTPS 页面** → 加载 `https://localhost:3366/mock.js`
- **HTTP 页面** → 加载 `http://localhost:3354/mock.js`

这样可以避免浏览器的混合内容（Mixed Content）安全限制。

## 安装

### 快速安装

**直接从 OpenUserJS 安装：** [点击这里安装](https://openuserjs.org/scripts/hqwuzhaoyi/AMH_Mock_Loader)

### 前置要求

安装用户脚本管理器（选择其一）：

- [Tampermonkey](https://www.tampermonkey.net/) - 推荐
- [Violentmonkey](https://violentmonkey.github.io/)
- [Greasemonkey](https://www.greasespot.net/)

### 安装步骤

#### 方式一：从 OpenUserJS 安装（推荐）

1. 访问 [OpenUserJS 页面](https://openuserjs.org/scripts/hqwuzhaoyi/AMH_Mock_Loader)
2. 点击 "Install" 按钮
3. 用户脚本管理器会自动提示安装
4. 点击"安装"确认

#### 方式二：从 GitHub 安装

1. 点击 [amh-mock-loader.user.js](amh-mock-loader.user.js) 文件
2. 点击 "Raw" 按钮
3. 用户脚本管理器会自动检测并提示安装
4. 点击"安装"按钮完成

## 支持的页面

脚本会在以下页面自动运行：

- `https://web.amh-group.com:8080/*`
- `http://web.amh-group.com:8080/*`
- `https://web.amh-group.com:3000/*`
- `http://web.amh-group.com:3000/*`
- `https://web.amh-group.com:10088/*`
- `http://web.amh-group.com:10088/*`

## 配置说明

如果需要修改 mock.js 的地址或端口，可以编辑脚本中的以下部分：

```javascript
const isHttps = window.location.protocol === 'https:';
script.src = isHttps ? 'https://localhost:3366/mock.js' : 'http://localhost:3354/mock.js';
```

## 本地 Mock 服务设置

确保你的本地 mock 服务运行在相应的端口：

- HTTPS 服务：`localhost:3366`
- HTTP 服务：`localhost:3354`

### 示例：启动本地 mock 服务

```bash
# HTTPS 服务（端口 3366）
cd your-mock-project
npm run serve:https

# HTTP 服务（端口 3354）
cd your-mock-project
npm run serve:http
```

## 开发与贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 作者

[@hqwuzhaoyi](https://github.com/hqwuzhaoyi)

## 更新日志

详见 [CHANGELOG.md](CHANGELOG.md)
