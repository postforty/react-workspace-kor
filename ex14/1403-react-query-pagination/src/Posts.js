import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchPosts } from "./api";
import { useEffect, useState } from "react";
import PostDetail from "./PostDetail";

export default function Posts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (currentPage >= 10) return;
    const nextPage = currentPage + 1;
    queryClient.prefetchQuery({
      queryKey: ["posts", nextPage],
      queryFn: () => fetchPosts(nextPage),
    });
  }, [currentPage, queryClient]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", currentPage], // 해당 쿼리를 cache와 stale time 관점에서 식별하는 방법
    queryFn: () => fetchPosts(currentPage),
    staleTime: 3000, // 기본값 0(항상 최신의 데이터 지향)
  });

  // console.log(data);

  if (isLoading) {
    return <h3>loading...</h3>;
  }

  if (isError) {
    return <h3>에러 발생: {error.message}</h3>;
  }

  // if (!data) {
  //   return <div />;
  // }

  return (
    <>
      <ul>
        {data.length > 0 &&
          data.map((post) => (
            <li
              key={post.id}
              style={{
                listStyleType: "none",
                cursor: "pointer",
                fontWeight: selectedPost?.id === post.id && "bold",
              }}
              onClick={() => {
                setSelectedPost(post);
              }}
            >
              {post.id}. {post.title}
            </li>
          ))}
      </ul>
      {selectedPost && <PostDetail selectedPost={selectedPost} />}
      <div>
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
          Prev
        </button>
        <span>Page {currentPage}</span>
        <button onClick={() => setCurrentPage((prev) => prev + 1)}>Next</button>
      </div>
    </>
  );
}
