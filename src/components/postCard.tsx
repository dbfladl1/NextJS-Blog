import React, { useEffect, useState } from "react";
import { postProps } from "@/app/[locale]/enter/guestbook/page";
import { LocalStorage, STORAGE_KEYS } from "@/utils/storage";
import { Delete } from "lucide-react";
import { deletePost } from "@/lib/guestbook";

type PostCardProps = {
  post: postProps;
  refreshHandler: () => void;
};

const storage = new LocalStorage();

export const PostCard = ({ post, refreshHandler }: PostCardProps) => {
  const [auth, setAuth] = useState("");
  useEffect(() => {
    const userKey = storage.get(STORAGE_KEYS.GUEST_TOKEN);
    if (userKey) {
      setAuth(userKey);
    }
  }, []);

  function deleteHandler() {
    const check = confirm("삭제하시겠습니까?");
    if (check) {
      storage.remove(STORAGE_KEYS.GUEST_TOKEN);
      deletePost(post.userid);
      refreshHandler();
    } else {
      return;
    }
  }

  return (
    <div className="relative inline-block paper-flutter bg-[#fbf7efda] sm:max-h-[300px] sm:min-h-[200px]  scroll-auto shadow-[1px_1px_0px_#d1cfc9] border border-[#e0ded9] p-5 pt-10 sm:w-[calc(33.333%-1rem)] w-full sm:min-w-[200px] rotate-[0.7deg]">
      <div className="absolute top-[8px] left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-gray-300 to-gray-600 border border-gray-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_1px_1px_2px_rgba(0,0,0,0.2)] z-10"></div>
      {auth === post.userid && (
        <button
          onClick={deleteHandler}
          className="absolute top-[8px] right-[-10] cursor-pointer"
        >
          <Delete color="#444" />
        </button>
      )}
      <p className="text-md text-gray-700 overflow-y-auto sm:h-[200px] pr-1">
        {post.text}
      </p>
      <p className="text-right mt-5 text-sm  text-gray-400">
        from. {post.nickname} (
        {post.relation}
        )
      </p>
    </div>
  );
};
