"use client";
import { userData } from "@/utils/userData";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export const Header = (): JSX.Element => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="flex box justify-between border-b-4 border-b-primary-1 bg-grey-0 w-full fixed z-50">
      <h3 className="text-grey-3">{userData.nameUser}</h3>
      <button
        type="button"
        area-aria-label={!openMenu ? "Abrir Menu" : "Fechar Menu"}
        title="menu"
        className="absolute right-4 md:hidden text-grey-5"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {!openMenu ? <FaBars /> : <IoMdClose />}
      </button>
      <nav
        className={`${
          !openMenu && "hidden"
        } h-48 md:h-auto text-grey-3 md:block`}
      >
        <ul className="absolute left-4 bottom-4 flex flex-col md:flex-row md:static justify-start gap-5 font-titles font-medium">
          <li className="hover:font-bold">
            <Link href={"#home"}>Home</Link>
          </li>
          <li className="hover:font-bold">
            <Link href={"#projects"}>Projects</Link>
          </li>
          <li className="hover:font-bold">
            <Link href={"#contacts"}>Contacts</Link>
          </li>
          <li className="hover:font-bold">
            <Link href={"#socialMedias"}>Social Medias</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
