import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkCodeImport from "remark-code-import";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";

const MarkDown = ({ children }: { children: string }) => {
  return (
    <ReactMarkDown
      remarkPlugins={[
        remarkMath,
        remarkGfm,
        remarkCodeImport,
        remarkParse,
        remarkRehype,
      ]}
      rehypePlugins={[rehypeKatex]}
    >
      {children}
    </ReactMarkDown>
  );
};

export default MarkDown;
