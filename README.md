# LangChain 文档中文版

[LangChain 官方文档](https://docs.langchain.com)的简体中文翻译，使用 [Mintlify](https://mintlify.com) 构建。

- 上游仓库：<https://github.com/langchain-ai/docs>
- 收录范围：`src/oss/**` 与 `src/snippets/**`
- 不包含 LangSmith（独立产品，站内链接指向官方英文文档）

> 本站是非官方翻译，译文由 AI 自动生成并经自动化校验，可能存在偏差。如与英文原文冲突，以[官方文档](https://docs.langchain.com)为准。

## 本地预览

```bash
npx mint dev
```

浏览器打开 <http://localhost:3000>。

## 目录结构

```text
docs.json        # Mintlify 站点配置与导航
index.mdx        # 首页
langchain/       # 中文文档
  oss/           #   LangChain / LangGraph / Deep Agents
  snippets/      #   可复用片段
oss/             # 图片、示意图等静态资源
```

## 许可证

上游文档采用 MIT 许可证，中文译文按同一许可证分发。详见 [LICENSE](LICENSE) 与 [NOTICE](NOTICE)。

LangChain、LangGraph、LangSmith、Deep Agents 等名称和标识归其权利人所有。本仓库不代表 LangChain 官方，也不暗示任何官方背书。
