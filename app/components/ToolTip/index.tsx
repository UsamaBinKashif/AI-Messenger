import React from "react";

type Props = {
  children: React.ReactNode;
  message: string | null;
};
const ToolTip = ({ children, message }: Props) => {
  return (
    <article className="group relative flex items-center justify-center   ">
      {children}
      <span className="absolute top-10 scale-0 transition-all rounded-lg   text-[10px] text-white group-hover:scale-100">
        {message}
      </span>
    </article>
  );
};

export default ToolTip;
