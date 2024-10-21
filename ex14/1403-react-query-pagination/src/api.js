export async function fetchPosts(pageNumber) {
  // throw new Error("오류!!!");
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNumber}`
    // `https://jsonplaceholder.typicode.com/posts`
  );
  return response.json();
}

export async function fetchComments(postId) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
  return response.json();
}
