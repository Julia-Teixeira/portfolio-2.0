"use client ";
import { useQuery } from "react-query";
import { getProjects } from "@/services/api";
import { FaGithub, FaShare } from "react-icons/fa";
import Link from "next/link";

export const Projects = (): JSX.Element => {
  const { data, isLoading } = useQuery({
    queryKey: "projects",
    queryFn: getProjects,
  });

  return (
    <section id="projects" className="box w-screen">
      <h2 className="text-grey-5">Meus projetos</h2>

      <section className="grid grid-cols-2 gap-14">
        {data?.map((project) => (
          <article
            key={project.id}
            className="text-grey-5 flex flex-col justify-evenly  max-w-md h-60"
          >
            <h2>{project.name}</h2>
            <p className="p500">
              Linguagens:{" "}
              <span className="px-2 bg-grey-1 text-grey-2 rounded">
                {project.language}
              </span>
            </p>
            <p className=" text-grey-2">{project.description}</p>
            <section className="flex gap-11">
              <Link
                href={project.html_url}
                target="_blank"
                className="flex gap-3 items-center text-grey-2 hover:text-grey-3"
              >
                <FaGithub /> Github Code
              </Link>

              {project.homepage && (
                <Link
                  href={project.homepage}
                  target="_blank"
                  className="flex gap-3 items-center text-grey-2 hover:text-grey-3"
                >
                  <FaShare /> Aplicação
                </Link>
              )}
            </section>
          </article>
        ))}
      </section>
    </section>
  );
};
