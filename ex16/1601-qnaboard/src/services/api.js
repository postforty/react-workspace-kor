const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzI5NzY1MjY0LCJleHAiOjE3Mjk4NTE2NjR9.R-DUmU2eNPtNULJlyUd-m4cV9b8t9IhX3V0gWRBd6_Azt2ROf6MKwBbjg9q03g97_RmbO5byqKHYG-wuFQC5KA";

export async function fetchQuestions(pageNum) {
  const response = await fetch(
    `http://localhost:8080/question/list?page=${pageNum - 1}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.json();
}

export async function fetchQuestionDetail(postId) {
  const response = await fetch(
    `http://localhost:8080/question/detail/${postId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.json();
}

export async function createQuestion(question) {
  const response = await fetch(`http://localhost:8080/question/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(question),
  });

  return response.status;
}
