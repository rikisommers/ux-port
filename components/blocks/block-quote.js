import React from "react";
import TextAnimationUp from "../utils/text-animation-up";

export const BlockQuote = ({ data }) => {
  return (
    <blockquote className="grid grid-cols-6">
      <div className="col-span-4 col-start-2 flex flex-col gap-4">
        {data.title && <span className="text-slate-400 text-sm">{data.title}</span>}

        <TextAnimationUp content={data.content}/>
        {data.content && <h2 className="italic text-3xl">{data.content}</h2>}
      </div>
    </blockquote>
  );
};

export default BlockQuote;
