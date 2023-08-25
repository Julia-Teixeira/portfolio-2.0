import { Button } from "@/components/buttons";
import { Icon } from "@/components/icons";
import { Stack } from "@/components/stacks";
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export const Home = (): JSX.Element => {
  return (
    <section
      id="home"
      className="box w-screen bg-grey-1 min-h-[400px] md:bg-header-background bg-no-repeat bg-fixed bg-right-center-2 lg:bg-right-center-4 flex flex-col justify-center"
    >
      <section className="md:w-[51.6666667%] flex flex-col gap-8 text-grey-5">
        <section className="flex gap-4 items-center pt-16">
          <Image
            src={`https://github.com/${userData.githubUser}.png`}
            alt={userData.nameUser}
            title={userData.nameUser}
            width={"48"}
            height={"48"}
            className="rounded-full"
          />
          <p>Olá, meu nome é Julia Pereira</p>
        </section>
        <h2>
          Eu{" "}
          <span className="text-primary-1 text-title2Mobile md:text-title2 font-titles font-bold">
            amo
          </span>{" "}
          criar e{" "}
          <span className="text-primary-1 text-title2Mobile md:text-title2 font-titles font-bold">
            devenvolver
          </span>{" "}
          projetos
        </h2>
        <p className="text-justify">
          Conheça aqui neste ambiente, criado especialmente para você, todos os
          meus projetos e tecnologias
        </p>
        <section className="flex gap-4">
          <Button color="primary">
            <Link href={"#projects"}>Ver Projetos</Link>
          </Button>
          <Icon color="github">
            <Link
              href={`https://github.com/${userData.githubUser}`}
              target="_blank"
            >
              <FaGithub />
            </Link>
          </Icon>
        </section>
        <section className="flex flex-wrap gap-16">
          {stackData.map((stack) => (
            <Stack icon={stack.img} title={stack.title} key={stack.title} />
          ))}
        </section>
      </section>
    </section>
  );
};
