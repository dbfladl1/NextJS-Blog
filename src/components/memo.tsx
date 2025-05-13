import React from "react";
type MemoProps = {
  text: string;
};

export const Memo = ({ text }: MemoProps) => {
  return (
    <div>
      <div>
        <div className="sm:w-0 sm:h-0 border-l-[10px] sm:border-r-[10px] sm:border-t-[15px] sm:border-l-transparent sm:border-r-transparent sm:border-t-[#eee] sm:absolute sm:top-[20px] sm:right-[30px]"></div>
        <div className="sm:absolute sm:w-[400px] bg-[#333] text-white sm:bg-[#eee] sm:text-black p-3 sm:bottom-[110px] sm:left-[60px] sm:rounded-lg z-100 fixed left-0 w-[96vw] ml-[2vw] bottom-[20px] shadow-md sm:shadow-none rounded-md ">
          {text}
        </div>
      </div>
    </div>
  );
};
