import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

interface Repository {
  id: number;
  name: string;
  language: string[];
  description: string;
  html_url: string;
  homepage: string;
}

interface CardProps {
  repos: Repository[];
  isLoading: boolean;
}

export const Card = ({ repos, isLoading }: CardProps): JSX.Element => {
  return (
    <>
      {isLoading ? (
        <h1>Carregando...</h1>
      ) : (
        <ul className="grid grid-cols-2 gap-4">
          {repos.map((repo) => (
            <li
              key={repo.id}
              className="w-96 h-56 flex flex-col gap-6 hover:p-1 transition ease-in-out duration-300 hover:scale-110"
            >
              <h2 className="text-grey-4">{repo.name}</h2>
              <section>
                <p className="p500 text-grey-2">
                  Linguagens:{" "}
                  <span className="p500 h-6 rounded bg-grey-1 p-1">
                    {repo.language}
                  </span>
                </p>
              </section>
              <section>
                <p className="text-grey-2">
                  {repo.description?.slice(0, 100)}...
                </p>
              </section>
              <section className="flex gap-11 text-grey-2">
                <Link
                  href={repo.html_url}
                  target="_blank"
                  className="flex gap-3 items-center"
                >
                  <FaGithub /> Github Code
                </Link>

                {repo.homepage && (
                  <Link
                    href={repo.homepage}
                    target="_blank"
                    className="flex gap-3 items-center"
                  >
                    <IoIosShareAlt />
                    Aplicação
                  </Link>
                )}
              </section>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
