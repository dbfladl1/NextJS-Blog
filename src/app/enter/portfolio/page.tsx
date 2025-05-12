import React from "react";
import Image from "next/image";
import PetmilyPath from "@/images/pm-logo.png";
import PMScreenShotPath01 from "@/images/pm-screenshot01.jpg";
import PMScreenShotPath02 from "@/images/pm-screenshot02.jpg";
import PMScreenShotPath03 from "@/images/pm-screenshot03.jpg";

export default function Portfoliopage() {
  return (
    <div className="p-5">
      <div className="rounded-2xl shadow-lg border border-gray-200 overflow-hidden max-w-md bg-white">
        <div className="w-full h-52 bg-gray-100 flex items-center justify-center">
          <Image
            src={PetmilyPath}
            alt="PETMILY"
            className="w-30 h-30 object-cover"
          />
        </div>
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-[#6e37ab]">🐾 PETMILY</h2>
          <p className="text-sm text-gray-600">React Native · GPT · KakaoMap</p>

          <p className="text-gray-800 text-sm">
            반려동물 보호자들을 위한 SNS + 커뮤니티 앱입니다. 지도 기반 장소
            탐색, GPT 상담 챗봇, SNS 피드 기능을 제공합니다. 기획부터 디자인,
            개발까지 전 과정 단독 진행했습니다.
          </p>

          <ul className="list-disc list-inside text-sm text-gray-700">
            <li>지도 이동 후 "이 위치에서 검색" 구현</li>
            <li>GPT 기반 동적 질문 챗봇</li>
            <li>SecureStore 통한 자동 로그인 처리</li>
          </ul>
          <div className="text-xs text-gray-500">
            🎯 현재: 플레이스토어 등록 테스트 중
          </div>
          <div className="flex justify-end gap-3 pt-1">
            <a
              href="https://www.notion.so/PETMILY-146d408c8e29808cb127cb7f7cd51705"
              target="_blank"
              className="text-sm text-[#5C4ACD] font-semibold hover:underline"
            >
              Notion
            </a>
            <a
              href="https://github.com/dbfladl1/PetmilyApp"
              target="_blank"
              className="text-sm text-[#5C4ACD] font-semibold hover:underline"
            >
              Git repo
            </a>
            <a
              href="https://drive.google.com/drive/folders/1w5ytFDkC-vnRbQmcCgYFzOgafhhYcXPH?hl=ko"
              target="_blank"
              className="text-sm text-[#5C4ACD] font-semibold hover:underline"
            >
              Download(Drive)
            </a>
          </div>
          <div className="flex gap-3">
            <Image src={PMScreenShotPath01} alt="PETMILY" className="h-52" />
            <Image src={PMScreenShotPath02} alt="PETMILY" className="h-52" />
            <Image src={PMScreenShotPath03} alt="PETMILY" className="h-52" />
          </div>
        </div>
      </div>
    </div>
  );
}
