import config from "@/app/config/config.json";
import ImageFallback from "@/app/components/ImageFallback";
import dateFormat from "@/lib/getFormattedDate";
import readingTime from "@/lib/utils/readingTime";
import Link from "next/link";

interface PostProps {
  post: any,
  i?: number
}
const Post: React.FC<PostProps> = ({ post, i }) => {
  const { summary_length, blog_folder } = config.settings;
  return (
    <div className="overflow-hidden rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,.05)]">
      {post.image && (
        <Link href={`/blog/${post.id}`}>
          <ImageFallback
            className="w-full object-cover"
            src={post.image}
            alt={post.title}
            width={570}
            height={335}
          />
        </Link>
      )}
      <div className="p-8">
        <h2 className="h4">
          <Link
            href={`/blog/${post.id}`}
            className="block hover:text-primary hover:underline"
          >
            {post.title}
          </Link>
        </h2>
        <p className="mt-4">
          {post?.content?.slice(0, Number(summary_length))}...
        </p>
        <div className="mt-6 flex items-center">
          <div className="overflow-hidden rounded-full border-2 border-white shadow-[0_0_0_2px] shadow-primary">
            <ImageFallback
              src={post?.author?.avatar}
              width={50}
              height={50}
              alt="author"
            />
          </div>
          <div className="pl-5">
            <p className="font-medium text-dark">
              {post.author?.name}
            </p>
            <p>
              {dateFormat(post.date)} - {readingTime(post.content || '')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
