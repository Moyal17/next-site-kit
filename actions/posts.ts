import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export function getSortedPostsData() {
    const postsDirectory = path.join(process.cwd(), 'staticData/blog_posts')
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        const { data: { title, author, avatar, date, draft, image }, content} = matterResult;
        const blogPost: BlogPost = {
            id, title, author, avatar, date, draft, content, image
        }
        // Combine the data with the id
        return blogPost
    });
    // Sort posts by date
    return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1);
}

export async function getPostData(id: string) {
    const postsDirectory = path.join(process.cwd(), 'staticData/blog_posts')
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);

    const contentHtml = processedContent.toString();


    const { data: { title, author, avatar, date, draft, image }, content} = matterResult;
    const article: BlogPost = {
        id, title, author, image, avatar, date, draft, content, contentHtml
    }
    return article
}