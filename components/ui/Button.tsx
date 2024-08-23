import React, { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
  disabled?: boolean;
  onClick?: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  className,
  disabled,
  onClick
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${className} 
        rounded-[8px] p-2
        shadow-xl 
      ${disabled ? 
        "bg-gradient-to-r from-violet-600/50 to-violet-500/50" : 
        "hover:bg-gradient-to-r hover:from-violet-800/70 hover:to-violet-500/60 bg-gradient-to-r from-violet-500 to-violet-800 "}`}
    >
      {children}
    </button>
  );
};

export default Button;
