import { addPost } from "@/lib/guestbook";
import { LocalStorage, STORAGE_KEYS } from "@/utils/storage";
import React, { useEffect, useState } from "react";

type layerProps = {
  closeHandler: () => void;
  refreshHandler: () => void;
};

const storage = new LocalStorage();

export const InputMemo = ({ closeHandler, refreshHandler }: layerProps) => {
  const [nickname, setNickname] = useState("");
  const [relation, setRelation] = useState("friend");
  const [text, setText] = useState("");
  const [userid, setUserid] = useState("");

  const generateRandomId = () => {
    return Math.random().toString(36).substring(2, 11);
  };

  useEffect(() => {
    const uid = storage.get(STORAGE_KEYS.GUEST_TOKEN);
    if (uid) {
      setUserid(uid);
    }
  }, []);

  const handleSubmit = async () => {
    if (userid !== "") {
      alert("이미 방명록을 작성하셨습니다");
      closeHandler();
      return;
    }
    const auth = generateRandomId();
    storage.set(STORAGE_KEYS.GUEST_TOKEN, auth);
    

    const response = await addPost({
      nickname,
      relation,
      text,
      userid: auth,
    });

    if (response === "failed") {
      console.log(response);
      alert("알 수 없는 에러 발생");
    } else {
      closeHandler();
      alert("방명록이 등록되었습니다");
      refreshHandler();
    }
  };

  return (
    <div className="fixed bottom-10 sm:right-10 right-[3vw] bg-white p-6 rounded-xl shadow-md w-[94vw] sm:w-full max-w-lg mx-auto space-y-4 border border-gray-200">
      <h2 className="text-xl font-bold text-gray-800">메모 남기기</h2>
      <select
        value={relation}
        onChange={(e) => setRelation(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#333] transition"
      >
        <option value="친구">친구</option>
        <option value="직장 동료">직장 동료</option>
      </select>
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        className="w-full border caret-black border-gray-300 rounded-md px-3 py-2 text-gray-700 resize-none focus:outline-none focus:ring-1 focus:ring-[#333] transition"
        placeholder="작성자 닉네임"
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full min-h-[120px] border caret-black border-gray-300 rounded-md px-3 py-2 text-gray-700 resize-none focus:outline-none focus:ring-1 focus:ring-[#333] transition"
        placeholder="메시지를 남겨주세요 :)"
      ></textarea>

      <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className="bg-[#6e37ab] w-[100px] hover:bg-[#5a2e95] text-white font-semibold py-2 px-6 rounded-lg transition-all"
        >
          등록
        </button>
      </div>
    </div>
  );
};
