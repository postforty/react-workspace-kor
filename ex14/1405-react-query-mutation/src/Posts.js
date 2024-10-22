import { deletePost, fetchPosts, updatePost } from "./api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import PostDetail from "./PostDetail";
import { useEffect, useState } from "react";

function Posts() {
  const [currentPage, setCurrentPage] = useState(1); // ! 추가
  const [selectedPost, setSelectedPost] = useState(null);

  // --- prefetching 추가(시작) -----------
  // 페이지를 넘길때 로딩 메시지로 UX가 좋지 않아 개선함
  const queryClient = useQueryClient();

  useEffect(() => {
    if (currentPage >= 10) return;
    const nextPage = currentPage + 1;
    queryClient.prefetchQuery({
      queryKey: ["posts", nextPage],
      queryFn: () => fetchPosts(nextPage),
    });
  }, [currentPage, queryClient]);
  // --- 2. prefetching 추가(끝) -----------

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["posts", currentPage], // ! 수정
    queryFn: () => fetchPosts(currentPage), // ! 수정
    staleTime: 2000,
  });

  //   if (!data) {
  //     return <div />;
  //   }

  const deleteMutation = useMutation({
    mutationFn: (postId) => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]); // 삭제 성공시 "posts" 쿼리를 무효화, 새로운 데이터 가져오기 위함
    },
  });

  const updateMutation = useMutation({
    mutationFn: (postId) => updatePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  if (isLoading) {
    return <h3>loading...</h3>;
  }

  // console.log("isError", isError);

  if (isError) {
    return <h3>에러 발생: {error.message}</h3>;
  }

  console.log(data);

  return (
    <>
      <ul>
        {data.data.map((post) => (
          <li
            key={post.id}
            style={{
              listStyleType: "none",
              cursor: "pointer",
              fontWeight: selectedPost && selectedPost.id === post.id && "bold",
            }}
            onClick={() => {
              setSelectedPost(post);
            }}
          >
            {post.id}.&nbsp;{post.title}
          </li>
        ))}
      </ul>
      <div>
        <button
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous page
        </button>
        <span>Page {currentPage}</span>
        <button
          disabled={currentPage >= 10}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next page
        </button>
        <hr />
        {selectedPost && (
          <PostDetail
            post={selectedPost}
            deleteMutation={deleteMutation}
            updateMutation={updateMutation}
          />
        )}
      </div>
    </>
  );
}

export default Posts;
