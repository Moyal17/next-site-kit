import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getCategories() {
  const postsDirectory = path.join(process.cwd(), 'staticData/blog_categories')
  const fileNames = fs.readdirSync(postsDirectory);
  const allCategoriesData = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const {data: {title, description, uri}} = matterResult;
    return {title, description, uri}
  });
  // Sort posts by date
  return allCategoriesData.sort((a, b) => a.title < b.title ? 1 : -1);
}

export async function getCategoryDetails(id: string) {
  try {
    const postsDirectory = path.join(process.cwd(), 'staticData/blog_categories')
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    const {data: {title, description, uri}} = matterResult;
    const category: BlogCategory = {title, description, uri}
    return category
  } catch (e) {
    console.error('error: ', e)
    return null
  }
}