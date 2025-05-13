type guestbook = {
  nickname: string;
  relation: string;
  text: string;
  userid: string;
};


export async function addPost({
  nickname,
  relation,
  text,
  userid,
}: guestbook) {
  const res = await fetch("/api/guestbook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nickname,
      relation,
      text,
      userid,
    }),
  });

  const result = await res.json().catch(() => null);
  return res.ok ? "success" : result?.error;
}

export async function getPost() {
  const res = await fetch("/api/guestbook", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await res.json().catch(() => null);

  return res.ok ? response.data : "failed";
}

export async function deletePost(userid: string) {
  const res = await fetch("/api/guestbook", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      userid,
    }),
  });

  await res.json().catch(() => null);

  return res.ok ? "success" : "failed";
}
