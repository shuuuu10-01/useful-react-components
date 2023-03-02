import { FC, ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  visual?: "fill" | "outline" | "alertFill" | "alertOutline";
}

const Button: FC<ButtonProps> = ({
  size = "medium",
  visual = "fill",
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(
        styles.button,
        styles[size],
        styles[visual],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
