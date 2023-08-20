import BlogList from '../../BlogPageContent';


export default async function CategoryRoute({ params }: { params: { category: string } }) {
    const filter = params.category;
    const { data = [] } = []; // await fetchPostsByCategory(filter);

    //TODO: CREATE A COMPONENT FOR THIS
    if (data.length === 0) return <div>Not Posts In this category</div>;

    const { name, description } = data[0]?.attributes.category.data.attributes;

    return (
        <div>
            <BlogList data={data} />
        </div>
    );
}

export async function generateStaticParams() {
    return [];
}
