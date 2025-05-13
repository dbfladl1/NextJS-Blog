"use client";

import { InputMemo } from "@/components/inputMemo";
import { PlusButton } from "@/components/plusButton";
import { PostCard } from "@/components/postCard";
import { getPost } from "@/lib/guestbook";
import React, { useEffect, useRef, useState } from "react";

export type postProps = {
  userid: string;
  nickname: string;
  relation: string;
  text: string;
  order?: number;
};

export default function GuestbookPage() {
  const [isInputLayer, setIsInputLayer] = useState(false);
  const [posts, setPosts] = useState<postProps[]>([]);

  const mouseDownInside = useRef(false);

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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await getPost(); // 또는 Supabase 요청
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-3xl py-10">⏳</div>; // 스피너 or 메시지
  }

  return (
    <div className="p-5">
      <h4 className="text-center text-lg mb-5">저는 이런사람이래요 😊😳</h4>
      <div className="flex flex-wrap gap-4">
        {posts
          .sort((a, b) => {
            if (a.order == null && b.order == null) return 0;
            if (a.order == null) return 1;
            if (b.order == null) return -1;

            return a.order - b.order;
          })
          .map((post) => (
            <PostCard post={post} refreshHandler={getPosts} key={post.userid} />
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
          onMouseDown={() => (mouseDownInside.current = false)}
          onMouseUp={() => {
            if (!mouseDownInside.current) {
              setIsInputLayer(false);
            }
          }}
        >
          <div
            className="absolute bottom-28 right-10"
            onMouseDown={(e) => {
              e.stopPropagation();
              mouseDownInside.current = true;
            }}
            onMouseUp={(e) => e.stopPropagation()}
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
