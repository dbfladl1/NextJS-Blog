"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import {Memo} from "@/components/memo";

type Props = {
  percent: number;
  size?: number;
  stroke?: number;
  label: string;
  note?: string;
  imgSrc: StaticImageData;
};
const MotionCircle = motion("circle");

export const CircularSkill = ({
  percent,
  size = 135,
  stroke = 6,
  label,
  note,
  imgSrc,
}: Props) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  const [isNote, setIsNote] = useState<boolean>(false);

  return (
    <div
      className="relative flex flex-col items-center w-[90px] h-[90px] sm:w-[135px] sm:h-[135px]"
      onMouseOver={() => setIsNote(true)}
      onMouseLeave={() => setIsNote(false)}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute top-0 left-0 w-full h-full"
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <MotionCircle
          stroke="#6e37ab"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1 }}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeLinecap="round"
        />
      </svg>

      <div className="overflow-hidden z-10 absolute w-[50%] h-[50%] top-[25%] sm:left-[35px] sm:top-[35px]">
        <Image
          src={imgSrc}
          alt={label}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="absolute top-[100px] sm:top-auto sm:bottom-[-30px] left-0 w-full flex justify-center">
        <p className="text-sm font-medium text-gray-700 text-center">
          {label} ({percent}%)
        </p>
      </div>

      {note && isNote && <Memo text={note} />}
    </div>
  );
};

