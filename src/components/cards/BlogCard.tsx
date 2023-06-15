import * as React from "react";
import { CardComponent, CardProps } from "@yext/search-ui-react";
import RtfConverter from "@yext/rtf-converter";
import Ce_blogs from "../../types/blogs";

const BlogCard: CardComponent<Ce_blogs> = ({
  result,
}: CardProps<Ce_blogs>): JSX.Element => {
  const blog: Ce_blogs = result.rawData;

  console.log(blog, "blog");
  const blogImage = blog?.c_blogImage?.url ? blog.c_blogImage.url : "";

  return (
    <>
      <div
        className="justify-between border rounded-lg mb-4 p-4 shadow-sm"
        style={{ width: "34%" }}
      >
        <img
          src={blogImage}
          style={{
            height: "150px",
            margin: "auto",
            width: "100%",
            marginBottom: "15px",
          }}
          alt=""
        />
        <div
          className="blogs-card"
          dangerouslySetInnerHTML={{
            __html: blog?.richTextDescription
              ? RtfConverter.toHTML(blog?.richTextDescription)
              : "",
          }}
        ></div>
      </div>
    </>
  );
};

export default BlogCard;
