import React from "react";
import Link from "next/link";
var json = require("../data.json");
var blogItems = json.publicBlogItems;

const BlogItems = () => (
  <div className={"p-10"}>
    {blogItems.map((post) => (
      <div
        className={
          "relative mb-2 border border-solid border-black bg-red-100 w-80"
        }
      >
        <div
          className={
            "font-black tracking-[1em] border-b border-solid border-black bg-red-400 text-white font-display py text-center"
          }
        >
          {post.date}
        </div>
        <div className={"flex"}>
          <img className="h-24 w-24 object-cover" src={post.img} alt=""></img>
          <div className={"p-2 flex flex-col w-full h-max"}>
            <span className={"font-serif italic"}>{post.title}...</span>
            <p className={"font-serif text-gray-500 text-xs"}>
              {post.subtitle}
            </p>
          </div>
        </div>
        <a
          href=""
          className={
            "py-1 px-2 bg-red-400 text-white bottom-0 right-0 absolute font-serif text-xs border-solid border-l border-t border-black hover:italic"
          }
        >
          Read Now
        </a>
      </div>
    ))}
  </div>
);

export default BlogItems;
