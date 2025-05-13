import { NavMenu } from "@/components/navMenu";
import { Open_Sans } from "next/font/google";
import Link from "next/link";

const sans = Open_Sans({ subsets: ["latin"] });

export default function EnterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${sans.className} max-w-[1440px] mx-auto caret-transparent`}
    >
      <header className="p-5 flex items-center justify-between border-b">
        {/* 모바일 메뉴 (햄버거) */}
        <NavMenu />
        <h1 className="text-2xl sm:text-3xl font-bold">
          let<span className="text-[#5C4ACD]"> yurim</span>
        </h1>
        {/* PC용 메뉴 */}
        <nav className="hidden sm:block">
          <ul className="flex gap-6 text-sm sm:text-base items-center font-medium">
            <li>
              <Link href="/enter/profile">PROFILE</Link>
            </li>
            <li>
              <Link href="/enter/portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link href="/enter/guestbook">GUESTBOOK</Link>
            </li>
            <li>
              <Link href="/enter/devlog">DEVLOG</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  );
}
