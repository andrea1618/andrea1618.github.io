# 个人网站项目规约

先读 [共同规则](../../dev-standards/AGENTS.md)。项目进度看 [README.md](README.md)，
尚未补齐的内容看 [SETUP-CHECKLIST.md](SETUP-CHECKLIST.md)。

## 环境与结构

纯 HTML 和 CSS，无构建步骤、Python 依赖或需要重建的 `.venv`，也不需要 API 密钥。
直接用浏览器打开 `index.html` 预览。样式统一在 `assets/css/style.css`；字体来自 Google Fonts。
保持现有静态结构，新增框架、JavaScript 或构建流程前先确认任务确实需要。

源码、图片、图表和已公开的 PDF 随 Git 保存；本项目没有 Drive 数据链接。
远程仓库是公开的 `andrea1618/andrea1618.github.io`，本地目录名是 `personal-website`。
`main` 根目录由 GitHub Pages 自动发布，推送到 `main` 会触发发布。`.nojekyll` 保留原位。

## 内容与编辑

- 首页 `index.html` 是介绍、Writing、Research 和联系方式的入口。
- 论文页在 `research/`，文章在 `writing/`。复制 `writing/example-post.html` 发布正式文章时，
  删除模板的 `noindex`，同时更新首页入口和 `sitemap.xml`。
- 子目录页面用 `../` 引用共享资源。论文 PDF 放 `assets/papers/`，按其中 README 命名；
  CV PDF 的预留路径是 `cv/cv.pdf`。
- 作者、论文状态、日期和联系方式必须有依据。没有确认的信息继续保留 `TODO`，不要补造。
  `SETUP-CHECKLIST.md` 中的占位项只有在实际完成并核对后才能勾选。
- 新增或移动页面后检查本地链接、资源路径和页面显示。文档修改只核对引用，不需要运行构建。

仓库与发布结果都公开。只提交获准公开的内容；未获准公开的个人资料、密钥和本机工具配置不进 Git。
