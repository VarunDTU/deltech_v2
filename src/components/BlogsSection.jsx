import { useQuery } from "@apollo/client";
import { query } from "../../lib/queries";

import BlogCard from "./BlogCard";

const BlogsSection = () => {
  const { loading, error, data } = useQuery(query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div>
      {data.blogsConnection.edges.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.node.title}
          img={blog.node.thumbnail.url}
          excerpt={blog.node.excerpt}
        />
      ))}
    </div>
  );
};

export default BlogsSection;
