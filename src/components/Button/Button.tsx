import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  size?: "small" | "medium" | "large",
  children?: ReactNode
}
/**
 * Primary UI component for user interaction
 */
export const Button:FC<ButtonProps> = ({
  primary = false,
  size = "medium",
  children,
  ...props
}) => {
  return (
    <button
      {...props}
    >
      { children }
    </button>
  );
};
