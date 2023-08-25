import { tv } from "tailwind-variants";

export const icon = tv({
  base: `border-[2px] border-solid w-12 h-12 flex items-center justify-center`,
  variants: {
    color: {
      default: `bg-grey-1 text-white border-grey-1 hover:bg-white hover:text-grey-1`,
      github: `bg-grey-1 text-white border-grey-5 hover:bg-white hover:text-grey-1`,
      facebook: `bg-social-facebook text-white border-social-facebook hover:text-social-facebook`,
      instagram: `bg-social-instagram text-white border-social-instagram hover:text-social-instagram`,
      linkedin: `bg-social-linkedin text-white border-social-linkedin hover:text-social-linkedin`,
      linkedinSquare: `bg-social-linkedin text-white border-social-linkedin cursor-default`,
      whatsapp:
        "bg-social-whatsapp text-white border-social-whatsapp cursor-default",
      email: "bg-tertiary-1 text-white border-tertiary-1 cursor-default",
    },
    size: {
      rounded: "rounded-full",
      square: "w-[5.5rem] h-[5.5rem] rounded-lg",
    },
    hover: {
      white: "hover:bg-white",
      transparent: "hover:bg-transparent",
    },
  },
});

interface IconProps {
  children: React.ReactNode;
  color?:
    | "github"
    | "default"
    | "facebook"
    | "instagram"
    | "linkedin"
    | "linkedinSquare"
    | "whatsapp"
    | "email";
  size?: "rounded" | "square";
  hover?: "white" | "transparent";
}

export const Icon = ({
  children,
  color = "default",
  size = "rounded",
  hover = "white",
}: IconProps): JSX.Element => {
  return <button className={icon({ color, size, hover })}>{children}</button>;
};
