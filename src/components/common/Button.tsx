import Link from "next/link";
import React from "react";

interface Props {
  text: string;
  bg?: string;
}

const Button: React.FC<Props> = ({ text, bg }) => {
  return (
    <button
      title={text}
      className={`button-animation border-textPrimary text-textPrimary rounded-full border-2 px-10 py-3 text-2xl no-underline transition-all ${bg}`}
    >
      {text}
    </button>
  );
};

export default Button;
