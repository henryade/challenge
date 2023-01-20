import {
  FC,
  ReactNode,
  DetailedHTMLProps,
  ButtonHTMLAttributes,
} from "react";

interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "link" | "button";
  children: ReactNode | string;
}

const Button: FC<IButton> = ({
  variant = "button",
  type = "button",
  className,
  ...props
}) => {
  switch (variant) {
    case "link":
      return (
        <button
          type={type}
          className={`bg-none outline-none text-sm ${className}`}
          {...props}
        >
          {props.children}
        </button>
      );
    default:
      return (
        <button
          type={type}
          className={className}
          {...props}
        >
          {props.children}
        </button>
      );
  }
};

export default Button;
