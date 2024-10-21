import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchComments } from "./api";

function PostDetail({ selectedPost }) {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["comments", selectedPost.id],
    queryFn: () => fetchComments(selectedPost.id),
    staleTime: 2000,
  });

  if (isLoading) {
    return <h3>loading...</h3>;
  }

  if (isError) {
    return <h3>에러 발생: {error.message}</h3>;
  }

  // console.log("PostDetail>>> ", data);

  return (
    <div>
      <h3>{selectedPost.title}</h3>
      <p>{selectedPost.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email} : {comment.body}
        </li>
      ))}
    </div>
  );
}

export default PostDetail;
