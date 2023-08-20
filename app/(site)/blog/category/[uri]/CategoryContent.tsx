"use client"
import { gsap } from "gsap";
import {useSearchParams} from "next/navigation";
import Pagination from "@/app/components/Pagination";
import Banner from "@/app/components/Banner";
import Cta from "@/app/components/Cta";
import Post from "../../components/Post";
import { useEffect, useRef } from "react";

interface CategoryPageContentProps {
  categoryDetails: any,
  uri: string,
  pagination: any,
  categories: any,
  posts: BlogPost[]
}

// blog pagination
const CategoryContent: React.FC<CategoryPageContentProps> = ({ posts, pagination, categoryDetails}) => {
  const searchParams = useSearchParams()
  const index = searchParams.get('index') as string;
  const currentPage: number = parseInt(index) || 1;
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const postsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(postsRef.current, {
        opacity: 1,
        duration: 0.5,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="section pt-0">
        <Banner title={categoryDetails.title} />
        <div className="container">
          <div className="row justify-center pt-20 pb-16 opacity-0" ref={postsRef}>
            {currentPosts.map((post: any, i: number) => (
              <div key={`key-${i}`} className="mb-8 lg:col-5">
                <Post post={post} />
              </div>
            ))}
          </div>
          <Pagination
            section={'blog/category'}
            totalPages={totalPages}
            currentPage={currentPage || 1}
          />
        </div>
      </section>
      {/* CTA */}
      <Cta />
    </>
  );
};

export default CategoryContent;