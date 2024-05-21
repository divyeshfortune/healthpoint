import React from "react";
import Image from "next/image";
import Link from "next/link";
import {blogs} from '../api/data';

const Blog = () => {
  return (
    <section className="blog-list-scn bg-section mt-32 dark:bg-black" id="blog">
      <div className="container">
        <div className="blog_heading flex items-baseline justify-between flex-wrap">
            <h2 className="sm:mb-[2.75rem] mb-3" data-aos="fade-left">Blog Post</h2>
            <Link href="#" className="btn_trans sm:mb-0 mb-4">View More</Link>
        </div>
        <div className="blog-list grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-[1.875rem]" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          {blogs.map((post, index) => (
            <Link key={index} href={`/blog-details/${post.slug}`} className="blog-item pricing col-span-4 group">
            <div className="blog-img max-w-full overflow-hidden relative w-full">
              <Image
                src={post.image}
                alt="blog"
                width={0}
                height={0}
                layout="responsive"
                quality={100}
                sizes="100vh"
                className="object-cover w-full h-full transition duration-500 group-hover:scale-[1.2]"
              />
              <span className="postdate py-[0.475rem] max-w-[4.9375rem] w-full text-center bg-primary text-white absolute left-0 top-0 mt-[0.9375rem] ml-[0.9375rem] rounded-[0.25rem] text-[0.8125rem] leading-[1.0581rem] font-medium">{post.lable}</span>
            </div>
            <div className="blog-cont">
                <h5 className="pt-[1.5rem] pb-[0.875rem] group-hover:text-primary">{post.title}</h5>
                <span className="text-[0.8125rem] leading-7 text-[#ACBCCA]">{post.timing}</span>
            </div>
          </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;