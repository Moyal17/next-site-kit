import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function getPageData(id: string) {
    const fullPath = path.join('staticData/pages', `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const blogPostWithHTML: Response = {
        id,
        title: matterResult.data.title,
        data: matterResult.data,
    }

    return blogPostWithHTML
}