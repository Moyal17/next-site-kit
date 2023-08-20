import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";

// mdx content parser
const parseMDX = async (content: string) => {
  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  };
  return await serialize(content, options);
};

export default parseMDX;
