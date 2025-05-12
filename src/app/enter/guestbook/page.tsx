"use client";

import { InputMemo } from "@/components/inputMemo";
import { PlusButton } from "@/components/plusButton";
import { PostCard } from "@/components/postCard";
import { getPost } from "@/lib/guestbook";
import React, { useEffect, useState } from "react";

export type postProps = {
  userid: string;
  nickname: string;
  relation: string;
  text: string;
};

export default function GuestbookPage() {
  const [isInputLayer, setIsInputLayer] = useState(false);
  const [posts, setPosts] = useState<postProps[]>([]);

  const handleBackgroundClick = () => {
    setIsInputLayer(false);
  };

  const getPosts = async () => {
    const res = await getPost();
    if (res === "failed" || res === undefined) {
      alert("데이터 로드 실패");
    } else {
      setPosts(res);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="p-5">
      <h4 className="text-center text-lg mb-5">저는 이런사람이래요 😊😳</h4>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <PostCard post={post} refreshHandler={getPosts} />
        ))}
      </div>
      <PlusButton
        bottom="10"
        right="10"
        handler={() => setIsInputLayer(true)}
      />
      {isInputLayer && (
        <div
          className="fixed inset-0 bg-black/20 z-10"
          onClick={handleBackgroundClick}
        >
          <div
            className="absolute bottom-28 right-10"
            onClick={(e) => e.stopPropagation()}
          >
            <InputMemo
              closeHandler={() => setIsInputLayer(false)}
              refreshHandler={getPosts}
            />
          </div>
        </div>
      )}
    </div>
  );
}
