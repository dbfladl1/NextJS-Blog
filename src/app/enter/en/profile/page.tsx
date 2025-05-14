import React from "react";
import Image, { StaticImageData } from "next/image";
import ProfilePath from "@/images/profile-2.jpg";
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
      note: "Understands semantic structures and it's purpose, and writes markup that follows web standard",
    },
    {
      name: "CSS",
      path: CSSPath,
      progress: 90,
      note: "Skilled in layout and styling, and can flexibily respond to various libraries like Tailwind CSS",
    },
    {
      name: "JavaScript",
      path: JSPath,
      progress: 85,
      note: "Understands synchronous/asynchronous processing, and adapts to open-api APIs such as ChatGPT, maps, and chart libraries."
      },
    {
      name: "TypeScript",
      path: TSPath,
      progress: 70,
      note: "Uses type and interface appropriately, applies generics, and is styding utility and conditional type",
    },
    {
      name: "React",
      path: ReactPath,
      progress: 85,
      note: "Familiar with component-driven development, with experience in separating components case-by-case and refactoring them into reusable structures. Also understands CSR and the rendering process.",
    },
  ];

  const subSkills: langSkill[] = [
    {
      name: "Next.js",
      path: NextJSPate,
      progress: 75,
      note: "Understands different rendering strategies in Next.js and when to apply SSR, CSR, ISR, and SSG.",
    },
    {
      name: "React-Native",
      path: ReactPath,
      progress: 70,
      note: "Has experience with functions like Naver Maps, image upload, and search API. Also experienced distribution from build APKs to releas",
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
      <div className="flex flex-col sm:flex-row items-center">
        <div className="p-5">
          <Image
            src={ProfilePath}
            alt={"프로필이미지"}
            width={280}
            height={300}
            className="rounded-sm shadow-xl "
          ></Image>
        </div>
        <div className="flex-8 text-ellipsis w-full mt-5 p-5 sm:p-0 sm:mt-0">
          <h2 className="text-[#5c4acd] mb-5 text-xl">Let me introduce</h2>
          <h2 className="font-bold">Yurim Lee (유림 이)</h2>
          <br />
          <div className="text-ellipsis">
            Hello, I&apos;m a developer who builds web and mobile apps -always aiming
            to write better code and create better UX
            <br />
            Since I started working as a developr at a start-up, I&apos;ve been
            thinking about how to improve pruduct qulity and enhance user
            experiences <br />
            through <b>planning, development, release and maintanance</b>.{" "}
            <br />
            <br />
            <br />
            AI technology is evolving rapidly, and that is why I believe strong
            communication skills and a clear understanding of service direction
            are more important than ever. <br />
            As a developer, I&apos;m committed to not only improving my skills but
            also adding value to your business.
          </div>
          <div className="mt-10">
            <h4>Conntact to me</h4>
            <ul className="sm:flex sm:flex-row sm:gap-5 mt-2 flex-col gap-5 ">
              <li>
                <a href="tel:+821012345678">📱 +82 10 4163 0862</a>
              </li>
              <li>
                <a href="mailto:yurim2222@email.com">📧 yurim2222@gmail.com</a>
              </li>
              <li>
                <a href="https://github.com/dbfladl1">
                  🗂️ https://github.com/dbfladl1
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h2 className="text-[#5c4acd] text-xl">Skills for work</h2>
        <div className="hidden text-[#666] mb-8 sm:mb-5 sm:block">
          Hover over 👀
        </div>
        <div className="text-[#666] mb-8 sm:mb-5 sm:hidden">
          click these icons 👀
        </div>
        <div className="mt-5 mb-15 grid grid-cols-3 gap-2 sm:mt-5 sm:mb-15 sm:flex sm:gap-10">
          {mainSkills.map((skill, index) => (
            <div className="relative mb-10" key={index}>
              <CircularSkill
                percent={skill.progress}
                imgSrc={skill.path}
                label={skill.name}
                note={skill.note}
              />
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold mt-10">
          Applied in Side Projects
        </h3>
        <div className="mt-5 mb-15 grid grid-cols-3 gap-2 sm:mt-5 sm:mb-15 sm:flex sm:gap-10 ">
          {subSkills.map((skill, index) => (
            <div className="relative" key={index}>
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
      <div className="p-5">
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
