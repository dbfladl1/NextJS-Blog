import { useTranslations } from "next-intl";
import React from "react";

export default function DevelogPage() {
  const t = useTranslations("devlog");
  return (
    <div className="max-w-[1440px] mx-auto h-[550px]">
      <section className="max-w-3xl mx-auto px-4 py-8 pb-20 text-gray-800">
        <h1 className="text-3xl font-bold mb-4"> {t("introduce.title")}</h1>

        <p className="mb-6">
          <span className="text-[#5C4ACD]">{t("introduce.intro_1")}</span>

          {t("introduce.intro_2")}
        </p>

        <p className="mb-6">
          <span className="text-[#5C4ACD]">{t("introduce.intro_3")}</span>
        </p>

        <p className="mb-6">
          <code className="bg-gray-200 px-2 py-1 rounded text-sm">
            let yurim
          </code>
          {t("introduce.intro_4")}
          <code className="bg-gray-200 px-2 py-1 rounded text-sm">let</code>
          {t("introduce.intro_5")}
          <br />
          {t("introduce.intro_6")}, <em> {t("introduce.intro_7")}</em>{" "}
          {t("introduce.intro_8")}
          😂
        </p>

        <hr className="my-8 border-t border-gray-300" />

        <h2 className="text-2xl font-semibold mb-4">🛠 {t("skills.title")}</h2>

        <p className="mb-6"> {t("skills.architecture")}</p>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>
            {t("skills.architecture_feat_1.span_1")}{" "}
            <strong>{t("skills.architecture_feat_1.span_2")}</strong>
            {t("skills.architecture_feat_1.span_3")}{" "}
            <strong>{t("skills.architecture_feat_1.span_4")}</strong>
            {t("skills.architecture_feat_1.span_5")}
          </li>
          <li>
            {t("skills.architecture_feat_2.span_1")}{" "}
            <strong>{t("skills.architecture_feat_2.span_2")}</strong>
            {t("skills.architecture_feat_2.span_3")}{" "}
            <strong>{t("skills.architecture_feat_2.span_4")}</strong>
            {t("skills.architecture_feat_2.span_5")}
          </li>
          <li>{t("skills.architecture_feat_3.span_1")} </li>
          <li>
            <strong>{t("skills.architecture_feat_4.span_1")}</strong>
            {t("skills.architecture_feat_4.span_2")}{" "}
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          📌 {t("skills.project_detail.title")}
        </h3>

        <ul className="list-disc list-inside mb-6 space-y-4">
          <li>
            <strong>{t("skills.project_detail.detail_feat_1.span_1")}</strong>
            <br />
            {t("skills.project_detail.detail_feat_1.span_2")}
            <code className="bg-gray-200 px-1 rounded">
              {t("skills.project_detail.detail_feat_1.span_3")}
            </code>
            {t("skills.project_detail.detail_feat_1.span_4")}
          </li>
          <li>
            <strong>{t("skills.project_detail.detail_feat_2.span_1")}</strong>
            <br />
            {t("skills.project_detail.detail_feat_2.span_2")}
          </li>
          <li>
            <strong>{t("skills.project_detail.detail_feat_3.span_1")}</strong>
            <br />
            {t("skills.project_detail.detail_feat_3.span_2")}
          </li>
        </ul>

        <hr className="my-8 border-t border-gray-300" />

        <h2 className="text-2xl font-semibold mb-4">
          📚 {t("skills.etc.title")}
        </h2>

        <p className="mb-2">
        {t("skills.etc.sub")}
        </p>
        <a
          href="https://www.notion.so/MY-PROFILE-1f0d408c8e29808f85d6dd4597f1fad4"
          target="_blank"
          className="text-[#5C4ACD] font-normal"
        >
          👉 MY PROFILE notion
        </a>
        <br />
        <a
          href="https://github.com/dbfladl1/NextJS-Blog"
          target="_blank"
          className="text-[#5C4ACD] font-normal"
        >
          👉 MY PROFILE Repo
        </a>
      </section>
    </div>
  );
}
