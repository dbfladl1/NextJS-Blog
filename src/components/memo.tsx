import React from "react";
type MemoProps = {
  text: string;
};

export default function Memo({ text }: MemoProps) {
  return (
    <div>
      <div>
        <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[15px] border-l-transparent border-r-transparent border-t-[#eee] absolute top-[20px] right-[30px]"></div>
        <div className="absolute w-[400px] bg-[#eee] p-3 bottom-[110px] left-[60px] rounded-lg z-20">
          {text}
        </div>
      </div>
    </div>
  );
}
