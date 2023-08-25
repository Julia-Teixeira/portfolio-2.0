import { userData } from "@/utils/userData";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Icon } from "../icons";
import Link from "next/link";

export const Footer = (): JSX.Element => {
  return (
    <footer className="box flex justify-between" id="socialMedias">
      <section className="flex gap-7 items-center pt-4">
        <Image
          src={`https://github.com/${userData.githubUser}.png`}
          alt={userData.nameUser}
          title={userData.nameUser}
          width={"48"}
          height={"48"}
          className="rounded-full"
        />
        <section>
          <h3 className="text-grey-5 pb-4">Obrigada!</h3>
          <span className="text-grey-2">Me siga nas redes sociais</span>
        </section>
      </section>

      <section className="flex gap-4">
        <Icon color="instagram" hover="transparent">
          <Link
            href={`https://www.instagram.com/${userData.instagramUser}`}
            target="_blank"
          >
            <FaInstagram />
          </Link>
        </Icon>
        <Icon color="linkedin" hover="transparent">
          <Link
            href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
            target="_blank"
          >
            <FaLinkedin />
          </Link>
        </Icon>
      </section>
    </footer>
  );
};
