import { Open_Sans } from "next/font/google";
import Link from "next/link";

const sans = Open_Sans({ subsets: ["latin"] });

export default function EnterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${sans.className} max-w-[1440px] m-auto caret-transparent`}>
      <header className="p-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        <h1 className="text-2xl sm:text-3xl">
          let<span className="text-[#5C4ACD]"> yurim</span>
        </h1>
        <nav>
          {/* <ul className="flex gap-3 justify-end">
            <li>
              <b>KO</b>
            </li>
            <li>EN</li>
          </ul> */}
          <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm sm:text-base items-center">
            <li>
              <Link href="/enter/profile">PROFILE</Link>
            </li>
            <li>
              <Link href="/enter/portfolio">PORTFOLIO</Link>
            </li>
            {/* <li>
              <Link href="/enter/posts">POSTS</Link>
            </li> */}
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
