import React, { useEffect, useState } from "react";
import { fetchPosts } from "./api";

export default function PostsJustFetch() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetchPosts(page);
      setData(posts);
    };

    getPosts();
  }, [page]);

  return (
    <>
      <ul>
        {data.length > 0 &&
          data.map((post) => (
            <li key={post.id} style={{ listStyleType: "none" }}>
              {post.id}. {post.title}
            </li>
          ))}
      </ul>
      <div>
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
          Prev
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </>
  );
}
