import React from "react";
import Link from "next/link";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { BsArrowRight } from "react-icons/bs";
import format from "date-fns/format";
import { PostConnectionEdges } from "../../tina/__generated__/types";

export const Posts = ({ data }: { data: PostConnectionEdges[] }) => {
  const titleColorClasses = {
    blue: "group-hover:text-blue-600 dark:group-hover:text-blue-300",
    teal: "group-hover:text-teal-600 dark:group-hover:text-teal-300",
    green: "group-hover:text-green-600 dark:group-hover:text-green-300",
    red: "group-hover:text-red-600 dark:group-hover:text-red-300",
    pink: "group-hover:text-pink-600 dark:group-hover:text-pink-300",
    purple: "group-hover:text-purple-600 dark:group-hover:text-purple-300",
    orange: "group-hover:text-orange-600 dark:group-hover:text-orange-300",
    yellow: "group-hover:text-yellow-500 dark:group-hover:text-yellow-300",
  };

  return (
    <>
      {data.map((postData) => {
        const post = postData.node;
        const date = new Date(post.date);
        let formattedDate = "";
        if (!isNaN(date.getTime())) {
          formattedDate = format(date, "MMM dd, yyyy");
        }
        return (
          <Link
            key={post._sys.filename}
            href={`/posts/` + post._sys.filename}
            className="block px-6 py-10 mb-8 bg-gray-50 bg-gradient-to-br from-gray-50 to-gray-100 rounded-md shadow-sm transition-all duration-150 ease-out group sm:px-8 md:px-10 last:mb-0 dark:from-gray-900 dark:to-gray-1000 hover:shadow-md hover:to-gray-50 dark:hover:to-gray-800"
          >
            <h3
              className={`mb-5 text-3xl font-semibold text-gray-700 transition-all duration-150 ease-out dark:text-white lg:text-4xl title-font`}
            >
              {post.title}{" "}
              <span className="inline-block opacity-0 transition-all duration-300 ease-out group-hover:opacity-100">
                <BsArrowRight className="inline-block -mt-1 ml-1 w-auto h-8 opacity-70" />
              </span>
            </h3>
            <div className="mb-5 w-full max-w-none opacity-70">
              <TinaMarkdown content={post.excerpt} />
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-2">
                <img
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                  src={post?.author?.avatar}
                  alt={post?.author?.name}
                />
              </div>
              <p className="text-base font-medium text-gray-600 group-hover:text-gray-800 dark:text-gray-200 dark:group-hover:text-white">
                {post?.author?.name}
              </p>
              {formattedDate !== "" && (
                <>
                  <span className="mx-2 font-bold text-gray-200 dark:text-gray-500">
                    —
                  </span>
                  <p className="text-base text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-150">
                    {formattedDate}
                  </p>
                </>
              )}
            </div>
          </Link>
        );
      })}
    </>
  );
};
