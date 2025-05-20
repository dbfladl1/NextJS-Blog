import React from "react";
type MemoProps = {
  text: string;
};

export const Memo = ({ text }: MemoProps) => {
  return (
    <div>
      <div>
        <div className="sm:absolute sm:w-[400px] bg-[#333] text-white sm:bg-[#eee] sm:text-black p-3 sm:bottom-[110px] sm:left-[60px] sm:rounded-lg z-100 fixed left-0 w-[96vw] ml-[2vw] bottom-[20px] shadow-md sm:shadow-none rounded-md ">
          {text}
        </div>
      </div>
    </div>
  );
};
