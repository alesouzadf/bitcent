import React from "react";
import Link from "next/link";

interface RedeSocialProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icone: any;
  url: string;
}

export default function RedeSocial(props: RedeSocialProps) {
  return (
    <Link href={props.url} target="_blank">
      <div className="bg-zinc-800 rounded-lg p-1 mr-3 cursor-pointer">
        {React.cloneElement(props.icone, {
          size: 35,
          stroke: 1,
          className: "text-indigo-500",
        })}
      </div>
    </Link>
  );
}
