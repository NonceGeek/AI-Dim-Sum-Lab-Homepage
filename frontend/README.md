# 🥟 AI DimSum Lab Homepage

一个现代化的粤语 AI 实验室主页，使用 Next.js 13+ App Router、Tailwind CSS v4、DaisyUI 5.0.43 和 Framer Motion 构建。

## ✨ 特性

- 🎨 **现代化设计** - 使用 DaisyUI 组件库和 OKLCH 颜色空间
- 🌙 **主题切换** - 支持明暗主题自动切换
- 📱 **响应式布局** - 完美适配各种设备尺寸
- 🎭 **流畅动画** - 使用 Framer Motion 实现滚动触发动画
- 🔤 **多语言字体** - 支持中文、英文和等宽字体
- ⚡ **性能优化** - SSR 支持，字体优化，图片优化
- ♿ **可访问性** - 支持 `prefers-reduced-motion`

## 🚀 快速开始

### 1. 安装依赖
```bash
pnpm install
```

### 2. 启动开发服务器
```bash
pnpm dev
```

### 3. 打开浏览器
访问 [http://localhost:3000](http://localhost:3000) 查看效果

## 📚 文档

详细的使用指南和开发文档请查看：

- **[📖 文档中心](./docs/README.md)** - 完整的项目文档索引
- **[🎨 字体指南](./docs/FONT_GUIDE.md)** - 字体配置和使用说明
- **[🎭 动画指南](./docs/ANIMATION_GUIDE.md)** - CSS 动画效果使用指南
- **[🚀 Framer Motion 指南](./docs/FRAMER_MOTION_GUIDE.md)** - 滚动触发动画实现指南

## 🛠️ 技术栈

- **框架**: Next.js 13+ (App Router)
- **样式**: Tailwind CSS v4 + DaisyUI 5.0.43
- **动画**: Framer Motion
- **图标**: Lucide React
- **字体**: Google Fonts (Inter, JetBrains Mono, Noto Sans SC/HK)
- **包管理**: pnpm
- **语言**: TypeScript

## 🎯 项目结构

```
frontend/
├── app/                    # Next.js App Router
│   ├── components/         # React 组件
│   │   ├── Header.tsx      # 导航栏组件
│   │   ├── Hero.tsx        # 英雄区域组件
│   │   ├── Features.tsx    # 特性展示组件
│   │   ├── Architecture.tsx # 架构展示组件
│   │   ├── QuickLinks.tsx  # 快速链接组件
│   │   ├── Footer.tsx      # 页脚组件
│   │   ├── ScrollReveal.tsx # 滚动动画组件
│   │   └── ThemeToggle.tsx # 主题切换组件
│   ├── globals.css         # 全局样式
│   ├── layout.tsx          # 根布局
│   └── page.tsx            # 首页
├── docs/                   # 项目文档
├── public/                 # 静态资源
└── package.json            # 项目配置
```

## 🎨 设计特色

### 主题系统
- **亮色主题**: 科技感蓝色调
- **暗色主题**: 深紫色调
- **颜色空间**: OKLCH 确保更好的色彩表现

### 字体系统
- **主字体**: Inter (科技感)
- **等宽字体**: JetBrains Mono (代码)
- **中文字体**: Noto Sans SC/HK (简体/繁体)

### 动画系统
- **CSS 动画**: 页面加载时的淡入效果
- **Framer Motion**: 滚动触发的交互动画
- **性能优化**: GPU 加速，支持 `prefers-reduced-motion`

## 🚀 部署

### Vercel 部署
项目已配置 Vercel 部署：
- 自动构建和部署
- 环境变量配置
- 域名和 SSL 证书

### 其他平台
支持部署到任何支持 Next.js 的平台：
- Netlify
- Railway
- DigitalOcean App Platform
- 自托管服务器

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](../LICENSE) 文件了解详情。

## 📞 联系我们

- 项目主页: [AI DimSum Lab](https://github.com/your-username/AI-DimSum-Lab-Homepage)
- 问题反馈: [Issues](https://github.com/your-username/AI-DimSum-Lab-Homepage/issues)
- 讨论区: [Discussions](https://github.com/your-username/AI-DimSum-Lab-Homepage/discussions)

---

**最后更新**: 2024年12月
