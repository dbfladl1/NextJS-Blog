import React from "react";
import Image, { StaticImageData } from "next/image";
import ProfilePath from "@/images/profile-3.png";
import HTMLPath from "@/images/HTML5_logo_and_wordmark.png";
import CSSPath from "@/images/CSS3_logo_and_wordmark.png";
import TSPath from "@/images/Typescript_logo_2020.svg";
import JSPath from "@/images/JavaScript-logo.png";
import ReactPath from "@/images/React-icon.svg";
import NextJSPate from "@/images/Nextjs-logo.svg";
import { CircularSkill } from "@/components/circularSkill";
import GitPath from "@/images/git.png";
import JIRAPath from "@/images/jira_cloud_macos_bigsur_icon_190051.png";
import NotionPath from "@/images/Notion-logo.svg.png";
import FigmaPath from "@/images/figma.jpeg";
import PhotoshopPath from "@/images/photoshop.png";
import IllustratorPath from "@/images/illu.jpg";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("profile");
  const mainSkills: langSkill[] = [
    {
      name: "HTML",
      path: HTMLPath,
      progress: 95,
    },
    {
      name: "CSS",
      path: CSSPath,
      progress: 90,
    },
    {
      name: "JavaScript",
      path: JSPath,
      progress: 85,
    },
    {
      name: "TypeScript",
      path: TSPath,
      progress: 70,
    },
    {
      name: "React",
      path: ReactPath,
      progress: 85,
    },
  ];
  const subSkills: langSkill[] = [
    {
      name: "Next.js",
      path: NextJSPate,
      progress: 75,
    },
    {
      name: "React-Native",
      path: ReactPath,
      progress: 70,
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
      <div className="relative h-[550px] items-center  bg-gradient-to-br from-[#5c4acd] via-[#0c0926] to-[#000000] overflow-hidden">
        <div className="max-w-[1440px] mx-auto h-[550px]">
          <div className="sm:flex sm:flex-row sm:translate-x-[50px] sm:translate-y-[145px] translate-y-[-145px]">
            <div className="mt-0 ">
              <ul className=" sm:flex sm:gap-5 flex-col gap-3 w-[255px] translate-y-[430px] translate-x-[170px] sm:translate-x-[50px] sm:translate-y-[-50px] right-3">
                <li className="p-3  sm:p-0  backdrop-blur-md bg-white/5 border border-white/20 text-[#eee] shadow-xl rounded-xl sm:translate-x-[60px] sm:mb-0 mb-4 ">
                  <a
                    href="tel:+821012345678"
                    className="  sm:h-[80px] h-[26px] block px-8"
                  >
                    <h3 className="sm:block hidden mt-5 text-xl">
                      Contact Number
                    </h3>
                    <span className="sm:mb-5 block">+82 10 4163 0862</span>
                  </a>
                </li>
                <li className="p-3 sm:p-0 backdrop-blur-md bg-white/5 border  border-white/20 text-[#eee] shadow-xl rounded-xl sm:translate-x-[90px] sm:mb-0 mb-4 ">
                  <a
                    href="mailto:yurim2222@email.com"
                    className="  sm:h-[80px] h-[26px] block px-8"
                  >
                    <h3 className="sm:block hidden mt-5 text-xl">
                      Email Address
                    </h3>
                    <span className="sm:mb-5 block">yurim2222@gmail.com</span>
                  </a>
                </li>
                <li className="p-3 sm:p-0 backdrop-blur-md bg-white/5 border border-white/20 text-[#eee]  shadow-xl rounded-xl sm:translate-x-[70px] sm:mb-0 mb-4 ">
                  <a
                    href="https://github.com/dbfladl1"
                    className="  sm:h-[80px] h-[26px] block px-8"
                  >
                    <h3 className="sm:block hidden mt-5 text-xl">
                      Github Site
                    </h3>
                    <span className="sm:mb-5 hidden sm:block">
                      https://github.com/dbfladl1
                    </span>
                    <span className="sm:mb-5 sm:hidden block">
                      Github 바로가기
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <Image
              src={ProfilePath}
              alt={"프로필이미지"}
              className="w-[240px] h-[340px] sm:h-full sm:w-[360px] rounded-md sm:object-cover sm:translate-y-[-155px] translate-y-[95px] absolute sm:relative left-[-15px] sm:left-10 z-10"
            ></Image>
            <div className="flex-8 text-ellipsis w-full mt-5 p-5 sm:p-0 sm:mt-0">
              <h1 className="text-3xl sm:text-5xl font-bold py-5 text-white sm:translate-x-[-150px] sm:translate-y-[-120px] translate-y-[-80px]">
                Hi! I&apos;m Yurim,
                <br />
                <span className="text-2xl sm:text-5xl font-extrabold bg-gradient-to-r from-[#6bf3ff] via-[#7f6eff] to-[#ff88cd] bg-clip-text text-transparent">
                  — a Creative Developer
                </span>
              </h1>
              <div className=" p-0 sm:w-[720px] sm:text-xl sm:translate-x-[-10px] text-md translate-y-[-90px] sm:translate-y-[-100px] text-white">
                {t("introduce.intro_1")}
                <span className="font-bold italic text-lg sm:text-xl">
                  {t("introduce.intro_highlight_1")}
                </span>{" "}
                {t("introduce.intro_2")}
                <br />
                <br />
                <div className="sm:block hidden">
                  {t("introduce.intro_3")}
                  <span className="font-bold italic text-xl">
                    {t("introduce.intro_highlight_2")}
                  </span>
                  {t("introduce.intro_4")}
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <svg
          className="w-full h-[70px] absolute bottom-0 left-0"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,128L60,160C120,192,240,224,360,208C480,192,600,128,720,112C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>
      <div className="p-5 max-w-[1440px] mx-auto text-center">
        <h2 className="text-[#5c4acd] text-xl">Skills for work</h2>
        <div className="hidden text-[#666] mb-8 sm:mb-5 sm:block">
          {t("skills.title_web")}
        </div>
        <div className="text-[#666] mb-8 sm:mb-5 sm:hidden">
          {t("skills.title_mb")}
        </div>
        <div className="text-left mt-5 mb-15 grid grid-cols-3 gap-2 sm:mt-5 sm:mb-15 sm:flex sm:gap-10 mx-auto  sm:w-[850px]">
          {mainSkills.map((skill, index) => {
            return (
              <div className="relative mb-10" key={index}>
                <CircularSkill
                  percent={skill.progress}
                  imgSrc={skill.path}
                  label={skill.name}
                  note={t(`skills.computer_lang.${index}.note`)}
                />
              </div>
            );
          })}
        </div>

        <h3 className="mt-10 text-[#5c4acd] text-xl">
          Applied in Side Projects
        </h3>
        <div className="text-left mt-5 mb-15 grid grid-cols-3 gap-2 sm:mt-5 sm:mb-15 sm:flex sm:gap-10 mx-auto sm:w-[850px] ">
          {subSkills.map((skill, index) => (
            <div className="relative" key={index}>
              <CircularSkill
                percent={skill.progress}
                imgSrc={skill.path}
                label={skill.name}
                note={t(`skills.computer_lang.${index}.note`)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="p-5 max-w-[1440px] mx-auto text-center sm:w-[850px] ">
        <h2 className="text-[#5c4acd] mb-5 text-xl">For Communication</h2>
        <div className="flex sm:gap-5 mb-10">
          {toolings.map((item, index) => (
            <div className="rounded-full p-3 sm:p-5 w-20 h-20 " key={index}>
              <Image src={item.path} alt={item.name} className="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
