"use client";

import { useState } from "react";
import Link from "next/link";
import { OccupationalType } from "@/libs/occupationalTypes";

export default function Circle() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-12 right-12 z-50 font-maple">
      <button
        onClick={toggleMenu}
        className="bg-orange-500 text-white w-14 h-14 rounded-full text-3xl"
      >
        +
      </button>

      <nav
        className={`absolute bottom-20 right-0 w-36 bg-gray-100 shadow-lg rounded-lg transition-transform duration-300 ${
          isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4 text-lg font-bold">
          {OccupationalType.map((occ) => (
            <Link key={occ.value} href={`/${occ.value}`}>
              <li className="hover:bg-gray-200 cursor-pointer rounded-md p-2">
                {occ.label}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}
