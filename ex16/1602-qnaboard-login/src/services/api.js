import useUserStore from "../hook/useUserStore";

export async function fetchQuestions(pageNum) {
  const {
    user: { token },
  } = useUserStore.getState();

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
  const {
    user: { token },
  } = useUserStore.getState();

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
  const {
    user: { token },
  } = useUserStore.getState();

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

export async function signin({ email, password }) {
  const response = await fetch(`http://localhost:8080/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Sign in faild");
  }

  return await response.json();
}
