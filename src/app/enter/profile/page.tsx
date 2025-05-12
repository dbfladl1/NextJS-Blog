import React from "react";
import Image, { StaticImageData } from "next/image";
import ProfilePath from "@/images/profile-2.jpg";
import HTMLPath from "@/images/HTML5_logo_and_wordmark.png";
import CSSPath from "@/images/CSS3_logo_and_wordmark.png";
import TSPath from "@/images/Typescript_logo_2020.svg";
import JSPath from "@/images/JavaScript-logo.png";
import ReactPath from "@/images/React-icon.svg";
import NextJSPate from "@/images/Nextjs-logo.svg";
import CircularSkill from "@/components/circularSkill";
import GitPath from "@/images/git.png";
import JIRAPath from "@/images/jira_cloud_macos_bigsur_icon_190051.png";
import NotionPath from "@/images/Notion-logo.svg.png";
import FigmaPath from "@/images/figma.jpeg";
import PhotoshopPath from "@/images/photoshop.png";
import IllustratorPath from "@/images/illu.jpg";

type langSkill = {
  name: string;
  path: StaticImageData;
  progress: number;
  note?: string;
};

type tool = {
  name: string;
  path: StaticImageData;
};

export default function ProfilePage() {
  const mainSkills: langSkill[] = [
    {
      name: "HTML",
      path: HTMLPath,
      progress: 95,
      note: "시맨틱 구조와 태그의 용도를 명확히 이해하고 있으며, 웹 표준을 고려한 마크업이 가능함",
    },
    {
      name: "CSS",
      path: CSSPath,
      progress: 90,
      note: "레이아웃 설계와 스타일링을 직접 구상하고 구현할 수 있는 역량을 갖추고 있으며,Tailwind CSS 및 다양한 스타일링 전략에도 유연하게 대응 가능",
    },
    {
      name: "JavaScript",
      path: JSPath,
      progress: 85,
      note: "동기/비동기에 대해 이해하고 있으며 외부 API(OpenAPI, ChatGPT, 지도, 차트 등) 활용 경험이 있으며, 프로젝트 상황에 맞는 라이브러리 선택과 데이터 흐름 구성에 능숙함",
    },
    {
      name: "TypeScript",
      path: TSPath,
      progress: 70,
      note: "type과 interface를 상황에 따라 구분해 사용하며, 제네릭 타입을 활용한 함수 및 컴포넌트 구현 경험 있음. 유틸리티 타입과 조건부 타입은 학습 및 실습 중",
    },
    {
      name: "React",
      path: ReactPath,
      progress: 85,
      note: "컴포넌트 기반 개발 방식에 익숙하며, CSR 개념과 렌더링 흐름을 이해하고 있음. 상황에 맞게 컴포넌트를 분리하고 재사용 가능한 구조로 설계한 경험 보유",
    },
  ];

  const subSkills: langSkill[] = [
    {
      name: "Next.js",
      path: NextJSPate,
      progress: 75,
      note: "App Router기반의 구조를 정확히 이해하며, SSR/SCR/ISR/SSG/Hydration이 무엇인지와 그 차이점에 대해 명확히 인지함",
    },
    {
      name: "React-Native",
      path: ReactPath,
      progress: 70,
      note: "Naver Map 연동, 이미지 업로드, 외부 API 활용 등 실무 수준의 기능을 직접 구현했으며, apk 빌드부터 release 단계까지의 앱 배포 경험이 있음",
    },
  ];

  const toolings: tool[] = [
    { name: "Git", path: GitPath },
    { name: "Jira", path: JIRAPath },
    { name: "Notion", path: NotionPath },
    { name: "Figma", path: FigmaPath },
    { name: "Photoshop", path: PhotoshopPath },
    { name: "Illustrator", path: IllustratorPath },
  ];

  return (
    <div>
      <div className="p-5 flex">
        <div>
          <Image
            src={ProfilePath}
            alt={"프로필이미지"}
            width={280}
            height={300}
            className="rounded-sm shadow-xl "
          ></Image>
        </div>
        <div className="pl-5 flex-8 ">
          <h2 className="text-[#5c4acd] mb-5 text-xl">Let me introduce</h2>
          <h2 className="font-bold">이유림 (Lee Yurim)</h2>
          <br />
          <div className="text-ellipsis">
            안녕하세요. 기능 구현을 넘어, 더 나은 코드와 사용자 경험까지 함께
            고민하는 프론트엔드 개발자입니다. <br />
            <br />
            스타트업에서 약 3년간 웹 서비스의 <b>기획, 개발, 배포, 운영</b>까지
            전 과정을 경험하며, 사용자 경험과 제품 완성도를 함께 고민해왔습니다.
            <br />
            <br />
            AI 기술의 발달로 단순한 개발은 물론 팀원들과 서비스의 방향을
            고민하고 소통할 수 있는 역량이 중요해지고 있다고 생각합니다. <br />
            핵심 개발 역량을 탄탄히 하는것은 물론, 회사와 함께 목표를
            실현해나가며 팀에 기여하는 팀원이 되기 위해 노력하고 있습니다.
          </div>
          <div className="mt-10">
            <h4>Conntact to me</h4>
            <ul className="flex gap-5">
              <li>
                <a href="tel:+821012345678">📱 +82 10 4163 0862</a>
              </li>
              <li>
                <a href="mailto:yurim2222@email.com">📧 yurim2222@gmail.com</a>
              </li>
              <li>
                <a href="https://github.com/dbfladl1">🗂️ https://github.com/dbfladl1</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-[#5c4acd] text-xl">Skills for work</h2>
        <div className="text-[#666] mb-5 ">마우스를 살짝 올려보세요 👀.. </div>
        <div>
          <h3>In Productions</h3>
          <div className="mt-5 mb-15 flex gap-10">
            {mainSkills.map((skill) => (
              <div className="relative">
                <CircularSkill
                  percent={skill.progress}
                  imgSrc={skill.path}
                  label={skill.name}
                  note={skill.note}
                />
              </div>
            ))}
          </div>
          <h3>Side Projects</h3>
          <div className="mt-5 mb-15 flex gap-10">
            {subSkills.map((skill) => (
              <div className="relative">
                <CircularSkill
                  percent={skill.progress}
                  imgSrc={skill.path}
                  label={skill.name}
                  note={skill.note}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-[#5c4acd] mb-5 text-xl">For Communication</h2>
        <div className="flex gap-5 mb-10">
          {toolings.map((item) => (
            <div className="rounded-full p-5 w-20 h-20 ">
              <Image src={item.path} alt={item.name} className="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
