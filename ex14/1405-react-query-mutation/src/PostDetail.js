import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchComments } from "./api";

function PostDetail({ post, updateMutation, deleteMutation }) {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["comments", post.id], // post.id를 추가하지 않으면 각 포스트를 클릭해도 comment 데이터가 갱신되지 않는다.
    queryFn: () => fetchComments(post.id), // fetchComments 함수의 매개 변수에 값을 넘기려면 익명 함수로 호출해야 함.
  });

  console.log("post>>>", post);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return (
      <>
        <h3>Error</h3>
        <p>{error.toString()}</p>
      </>
    );
  }

  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <div>
        <button onClick={() => deleteMutation.mutate(post.id)}>Delete</button>
        {deleteMutation.isPending && <p>Deleting the post</p>}
        {deleteMutation.isError && (
          <p>Error : {deleteMutation.error.message}</p>
        )}
      </div>
      <div>
        <button onClick={() => updateMutation.mutate(post.id)}>Udpate</button>
        {updateMutation.isPending && <p>Updating the post</p>}
        {updateMutation.isError && (
          <p>Error : {updateMutation.error.message}</p>
        )}
        {updateMutation.isSuccess && <p>Post was updated</p>}
      </div>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}

export default PostDetail;
