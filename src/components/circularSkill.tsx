"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Memo from "@/components/memo";

type Props = {
  percent: number;
  size?: number;
  stroke?: number;
  label: string;
  note?: string;
  imgSrc: StaticImageData;
};
const MotionCircle = motion("circle");

export default function CircularSkill({
  percent,
  size = 135,
  stroke = 6,
  label,
  note,
  imgSrc,
}: Props) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  const [isNote, setIsNote] = useState<boolean>(false);

  return (
    <div
      className="relative flex flex-col items-center "
      style={{ width: size, height: size }}
      onMouseOver={() => setIsNote(true)}
      onMouseLeave={() => setIsNote(false)}
    >
      <svg
        width={size}
        height={size}
        className="absolute top-0 left-0"
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
      <div className="overflow-hidden z-10 absolute left-[35px] top-[35px]">
        <Image
          src={imgSrc}
          alt={label}
          className="object-contain"
          style={{ width: size - 70, height: size - 70 }}
        ></Image>
      </div>
      <div className="absolute bottom-[-30px] left-0 w-full flex justify-center">
        <p className="text-sm font-medium text-gray-700">
          {label} ({percent}%)
        </p>
      </div>
      {note && isNote && <Memo text={note} /> }
    </div>
  );
}
