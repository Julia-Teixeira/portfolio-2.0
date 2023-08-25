import Image from "next/image";
import { IconType } from "react-icons";

interface StackProps {
  title: string;
  icon: string | IconType;
}

export const Stack = ({ icon: Icon, title }: StackProps): JSX.Element => {
  const isString = typeof Icon === "string";
  return (
    <section className="group flex flex-col items-center bg-transparent relative pt-7">
      <h3
        className={`opacity-0 absolute translate-y-[-50%] bg-white shadow-[drop-shadow(0px_4px_30px_rgba(0,0,0,0.12))] 
        px-[1rem] py-[0.4rem] rounded-lg font-medium text-black whitespace-nowrap 
        before:content-[''] before:-z-[1] before:absolute before:bottom-[-5px] before:left-[0%] before:w-0 before:h-0 
        before:border-l-[25px] before:border-solid before:border-l-transparent before:border-r-[25px]
        before:border-r-transparent before:translate-x-[10%] before:border-t-[25px]
        before:border-t-white
        group-hover:opacity-100 group-hover:top-0 group-hover:translate-x-[0%] group-hover:animate-scaleUp`}
      >
        {title}
      </h3>
      {isString ? (
        <Image src={Icon} alt={title} title={title} height="84" width="84" />
      ) : (
        <Icon size={84} color="#868E96" aria-label={title} title={title} />
      )}
    </section>
  );
};
