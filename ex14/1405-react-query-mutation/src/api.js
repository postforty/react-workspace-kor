export async function fetchPosts(pageNum = 1) {
  console.log("pageNum>>>", pageNum);
  const response = await fetch(
    `http://localhost:4000/posts?_per_page=10&_page=${pageNum}`
  );

  //   throw new Error("네트워크 응답이 실패했습니다.");
  return response.json();
}

export async function fetchComments(postId) {
  const response = await fetch(
    `http://localhost:4000/comments?postId=${postId}`
  );
  return response.json();
}

export async function deletePost(postId) {
  const response = await fetch(`http://localhost:4000/posts/${postId}`, {
    method: "DELETE",
  });
  return response.json();
}

export async function updatePost(postId) {
  const response = await fetch(`http://localhost:4000/posts/${postId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "React.js Forever!!!" }),
  });
  return response.json();
}
