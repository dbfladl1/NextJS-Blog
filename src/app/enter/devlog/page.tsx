import React from "react";

export default function page() {
  return (
    <div>
      <section className="max-w-3xl mx-auto px-4 py-8 pb-20 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">프로젝트 소개</h1>

        <p className="mb-6">
          <span className="text-[#5C4ACD]">
            Next.js, TypeScript, Supabase, Tailwind
          </span>
          를 이용해 프론트엔드부터 백엔드까지 구현한 사이드 프로젝트이자 프로필
          페이지입니다.
        </p>

        <p className="mb-6">
          <span className="text-[#5C4ACD]">
            &ldquo;나라는 사람을 어떻게 표현할까?&rdquo;
          </span>
          를 고민하다가, 누군가의 입을 빌려 소개되는 형태로 표현하면 재밌겠다는
          아이디어에서 출발했습니다.
        </p>

        <p className="mb-6">
          <code className="bg-gray-200 px-2 py-1 rounded text-sm">
            let yurim
          </code>
          이라는 이름은 JavaScript의{" "}
          <code className="bg-gray-200 px-2 py-1 rounded text-sm">let</code>{" "}
          선언처럼, 이미 존재하지만 계속해서 변화하고 성장하는 객체로서의 저를
          표현하고 싶었습니다.
          <br />
          그리고 몰래 노렸던 말장난, <em>“let me introduce myself”</em>도 함께요
          😂
        </p>

        <hr className="my-8 border-t border-gray-300" />

        <h2 className="text-2xl font-semibold mb-4">🛠 기술적인 구성</h2>

        <p className="mb-6">페이지 특성에 따라 렌더링 방식을 구분했습니다.</p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>
            변경이 잦지 않은 <strong>PROFILE, PORTFOLIO, POST, DEVLOG</strong>
            페이지는 <strong>SSG</strong>로 구성
          </li>
          <li>
            예측할 수 없는 시점에 글이 등록되는 <strong>GUESTBOOK</strong>
            페이지는 <strong>CSR</strong>로 처리
          </li>
          <li>모바일에서도 불편함 없이 볼 수 있도록 반응형으로 제작했습니다.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          📌 개발 시 신경 쓴 부분
        </h3>

        <ul className="list-disc list-inside mb-6 space-y-4">
          <li>
            <strong>재사용 가능한 로직의 모듈화</strong>
            <br />
            예: 공통된 response 반환 로직을
            <code className="bg-gray-200 px-1 rounded">utils/apiRes.ts</code>로
            분리
          </li>
          <li>
            <strong>명확한 타입 설계</strong>
            <br />
            예: 각 데이터 목적에 맞는 Type 구조화
          </li>
          <li>
            <strong>localStorage 관리 개선</strong>
            <br />
            예: Storage 클래스를 생성하고 key를 고정해 상속받아 사용 → 컴포넌트
            어디서든 일관된 접근 가능 & 오타 방지
          </li>
        </ul>

        <hr className="my-8 border-t border-gray-300" />

        <h2 className="text-2xl font-semibold mb-4">📚 더 자세한 이야기</h2>

        <p className="mb-2">
          프로젝트를 진행하며 마주친 기술적 고민이나 시행착오는 아래 노션
          페이지에 정리해 두었습니다.
        </p>
        <a
          href="https://www.notion.so/MY-PROFILE-1f0d408c8e29808f85d6dd4597f1fad4"
          target="_blank"
          className="text-[#5C4ACD] font-normal"
        >
          👉 MY PROFILE 노션 링크
        </a>
        <br />
        <a
          href="https://github.com/dbfladl1/NextJS-Blog"
          target="_blank"
          className="text-[#5C4ACD] font-normal"
        >
          👉 MY PROFILE Repo
        </a>
        <hr className="my-8 border-t border-gray-300" />

        <h2 className="text-2xl font-semibold mb-4">🧩 남은 작업 목표</h2>

        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
          <li>모바일 대응을 위한 반응형 디자인 전환</li>
        </ul>
      </section>
    </div>
  );
}
