import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from "remark";
import html from "remark-html";
import parseMDX from "@/lib/utils/mdxParser";
export async function getPageData(id: string) {
    try {
        const fullPath = path.join('staticData/pages', `${id}.md`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        const processedContent = await remark()
          .use(html)
          .process(matterResult.content);
        const contentHtml = processedContent.toString();
        const mdxContent = await parseMDX(matterResult.content);
        const { data, data: { title, date, image }, content} = matterResult;
        return { id, title, image, date, content, contentHtml, data, mdxContent }
    } catch (e) {
        return null;
    }
}