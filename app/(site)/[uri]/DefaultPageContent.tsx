import Banner from "@/app/components/Banner";
interface DefaultPageContentProps {
  pageDetails: any,
  uri: string
}
const DefaultPageContent: React.FC<DefaultPageContentProps> = ({ pageDetails }) => {
  const { title, contentHtml } = pageDetails;
  return (
    <section className="section pt-0">
      <Banner title={title} />
      <div className="container mt-10">
        <div className="content">
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>
      </div>
    </section>
  );
};

export default DefaultPageContent;
