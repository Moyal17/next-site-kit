"use client"
import Banner from "@/app/components/Banner";
import { MDXRemote } from "next-mdx-remote";
import shortcodes from "@/app/components/shortcodes";
interface DefaultPageContentProps {
  pageDetails: any,
  uri: string
}
const DefaultContent: React.FC<DefaultPageContentProps> = ({ pageDetails }) => {
  const { title, contentHtml, mdxContent } = pageDetails;
  return (
    <section className="section pt-0">
      <Banner title={title} />
      <div className="container mt-10">
        <div className="content">
          <MDXRemote {...mdxContent} components={shortcodes} />
        </div>
      </div>
    </section>
  );
};

export default DefaultContent;
