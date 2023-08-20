import dateFormat from "@/lib/getFormattedDate";
import readingTime from "@/lib/utils/readingTime";
import { markdownify } from "@/lib/utils/textConverter";
import Cta from "@/app/components/Cta";
import ImageFallback from "@/app/components/ImageFallback";
import Post from "../components/Post";

interface ArticleContentProps {
  postDetails: BlogPost,
  uri: string,
  recentPosts: BlogPost[]
}
const ArticleContent: React.FC<ArticleContentProps> = ({ postDetails, uri, recentPosts }) => {
  let { description, title, date, image, author, content, contentHtml } = postDetails;
  return (
    <>
      <section className="section pt-0">
        <div className="container">
          <article>
            <div className="row justify-center">
              <div className="lg:col-10">
                { image && (
                  <ImageFallback
                    priority={true}
                    height="700"
                    width="1120"
                    src={image}
                    alt={title}
                  />
                )}
              </div>
              <div className="lg:col-8">
                { markdownify(title, "h1", "h2 mt-6")}
                <div className="mt-6 flex items-center">
                  <div className="overflow-hidden rounded-full border-2 border-white shadow-[0_0_0_2px] shadow-primary">
                    <ImageFallback
                      src={author.avatar}
                      width={50}
                      height={50}
                      alt="author"
                    />
                  </div>
                  <div className="pl-5">
                    <p className="font-medium text-dark">{author.name}</p>
                    <p>
                      { dateFormat(date)} - {readingTime(content)}
                    </p>
                  </div>
                </div>
                <div className="content mt-16 mb-16 text-left">
                  <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                </div>
              </div>
            </div>
          </article>

          <div className="section mt-16">
            <h2 className="section-title text-center">Recent Articles</h2>
            <div className="row justify-center">
              { recentPosts.slice(0, 2).map((post: any, index: number) => (
                <div key={"post-" + index} className="animate mt-16 lg:col-5">
                  <Post post={post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
};

export default ArticleContent;
