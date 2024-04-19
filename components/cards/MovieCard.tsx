import Image from "next/image";
import React from "react";

type Props = {
  i: {
    height: number;
    imageUrl: string;
    width: number;
  };
  id: string;
  l: string;
  q: string;
  qid: string;
  rank: number;
  s: string;
  y: number;
  yr: string;
};

const MovieCard = (props: Props) => {
  return (
    <div className="mr-4">
      <Image
        alt=""
        width={200}
        height={266}
        src={props.i?.imageUrl || ""}
        className="rounded-[4px]"
      />
    </div>
  );
};

export default MovieCard;
