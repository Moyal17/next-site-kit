import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
export function getCategories() {
    const postsDirectory = path.join(process.cwd(), 'staticData/blog_categories')
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allCategoriesData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);
        const { data: { title, description, uri }, content} = matterResult;
        const blogPost: BlogCategory = {
            id, title, description, uri, content
        }
        // Combine the data with the id
        return blogPost
    });
    // Sort posts by date
    return allCategoriesData.sort((a, b) => a.date < b.date ? 1 : -1);
}

export async function getCategoryDetails(id: string) {
    const postsDirectory = path.join(process.cwd(), 'staticData/blog_categories')
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const { data: { title, description, uri }, content} = matterResult;
    const category: BlogCategory = {
        id, title, description, uri, content
    }
    return category
}