import { tv } from "tailwind-variants";

export const button = tv({
  base: `rounded-lg border-[2px] border-solid font-texts font-medium`,
  variants: {
    color: {
      default:
        "bg-grey-1 text-white border-grey-1 hover:bg-white hover:text-grey-1",
      primary: "bg-primary-1 hover:bg-primary-2 text-white border-primary-1",
      none: "bg-none text-grey-3 border-none",
    },
    size: {
      sm: "h-7 px-[1.125rem] text-xs",
      md: "h-12 px-8 text-base",
    },
  },
});

interface ButtonProps {
  children: React.ReactNode;
  color?: "primary" | "default" | "none";
  size?: "sm" | "md";
}

export const Button = ({
  children,
  color = "default",
  size = "md",
}: ButtonProps): JSX.Element => {
  return (
    <button className={button({ color: color, size: size })}>{children}</button>
  );
};
