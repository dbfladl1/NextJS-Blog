"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function NavMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="sm:hidden" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav
        className={`sm:hidden overflow-hidden transition-all duration-300 px-5 ${
          open ? "max-h-60 py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-sm font-medium">
          <li><Link href="/enter/profile" onClick={() => setOpen(false)}>PROFILE</Link></li>
          <li><Link href="/enter/portfolio" onClick={() => setOpen(false)}>PORTFOLIO</Link></li>
          <li><Link href="/enter/guestbook" onClick={() => setOpen(false)}>GUESTBOOK</Link></li>
          <li><Link href="/enter/devlog" onClick={() => setOpen(false)}>DEVLOG</Link></li>
        </ul>
      </nav>
    </>
  );
}
