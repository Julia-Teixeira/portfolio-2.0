import { FaLinkedin, FaMailBulk, FaWhatsapp } from "react-icons/fa";
import { Icon } from "../icons";
import Link from "next/link";
import { userData } from "@/utils/userData";

export const Contacts = (): JSX.Element => {
  return (
    <section
      className="box bg-grey-1 w-screen h-[600px] flex justify-center items-center gap-40"
      id="contacts"
    >
      <section className="w-1/2 sticky">
        <h2 className="text-grey-5">
          Vamos marcar uma conversa e{" "}
          <span className="text-brand-1 font-bold font-titles text-title2">
            desenvolver nossa criatividade
          </span>{" "}
          juntos?
        </h2>
      </section>
      <section className="w-1/2 flex flex-col gap-16">
        <article className="flex gap-7">
          <section className="h-[72px] w-[72px]">
            <Icon color="whatsapp" size="square" hover="none">
              <FaWhatsapp size={24} />
            </Icon>
          </section>
          <section className="flex flex-col gap-4 text-grey-3">
            <h4>Meu whatsapp</h4>
            <span className="text-grey-2">
              Estou disponível para chamadas ou mensagens!
            </span>
            <Link
              href={`https://api.whatsapp.com/send?phone=+55+${userData.whatsappNumber}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
              className="hover:text-grey-2"
              target="_blank"
            >
              Me ligue
            </Link>
          </section>
        </article>
        {/* <article className="flex gap-7">
          <section className="h-[72px] w-[72px]">
            <Icon color="email" size="square">
              <FaMailBulk size={24} />
            </Icon>
          </section>
          <section className="flex flex-col gap-4 text-grey-3">
            <h4>Meu email</h4>
            <span className="text-grey-2">
              Envie-me um e-mail relatando feedbacks, sugestões e ideias!
            </span>
            <Link
              href={`mailto=${userData.emailUser}`}
              className="hover:text-grey-2"
              target="_blank"
              onClick={() =>
                (window.location.href = `mailto=${userData.emailUser}`)
              }
            >
              Enviar email
            </Link>
          </section>
        </article> */}
        <article className="flex gap-7">
          <section className="h-[72px] w-[72px]">
            <Icon color="linkedinSquare" size="square" hover="none">
              <FaLinkedin size={24} />
            </Icon>
          </section>
          <section className="flex flex-col gap-4 text-grey-3">
            <h4>Meu LinkedIn</h4>
            <span className="text-grey-2">
              Podemos criar interações mais constantes e também uma rede de
              compartilhamento
            </span>
            <Link
              href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              className="hover:text-grey-2"
              target="_blank"
            >
              Ir para o LinkedIn
            </Link>
          </section>
        </article>
      </section>
    </section>
  );
};
