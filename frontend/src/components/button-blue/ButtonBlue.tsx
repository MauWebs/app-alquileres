import { ReactNode } from "react";
import "./buttonBlue.scss";

interface ButtonBlueProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}

const ButtonBlue: React.FC<ButtonBlueProps> = ({ children, type = "button" }) => {
  return (
    <button type={type} className="button-blue">
      {children}
    </button>
  );
};

export default ButtonBlue;
