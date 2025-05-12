import React from "react";
import { Plus } from "lucide-react";

type buttonPosition = {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  handler: ()=> void;
};

export const PlusButton = ({ top, bottom, left, right, handler }: buttonPosition) => {
    const positionClasses = [
        top && `top-${top}`,
        bottom && `bottom-${bottom}`,
        left && `left-${left}`,
        right && `right-${right}`,
      ]
        .filter(Boolean)
        .join(" ");

    return (
    <button
      className={`fixed ${positionClasses} w-14 h-14 rounded-full bg-[#6e37ab] text-white shadow-lg flex items-center justify-center hover:bg-[#5b2c91] transition-all duration-200`}
      aria-label="추가"
      onClick={handler}
    >
      <Plus size={28} />
    </button>
  );
};
