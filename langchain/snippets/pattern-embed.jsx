// 上游仓库缺失该组件（langchain-ai/docs 的 src/snippets/pattern-embed.jsx 返回 404），
// 这里提供降级占位，保证引用它的 MDX 页面可以正常编译与渲染。
export function PatternEmbed({ pattern = "", minHeight = 400 }) {
  return (
    <div
      style={{
        minHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px dashed #d0d5dd",
        borderRadius: 12,
        padding: 24,
        color: "#667085",
        fontSize: 14,
        textAlign: "center",
      }}
    >
      交互示例暂不可用（上游文档源缺失：{pattern}）
    </div>
  );
}
