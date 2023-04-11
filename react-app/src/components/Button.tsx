import { ReactNode, useState } from "react";
import style from "./index.module.css";

interface Props {
  title: string[];
  onClick: () => void;
}

const Button = ({ title, onClick }: Props) => {
  return (
    <div className="Container">
      {title.map((item) => (
        <button type="button" onClick={onClick} className={item}>
          Button
        </button>
      ))}
    </div>
  );
};
``;
export default Button;
