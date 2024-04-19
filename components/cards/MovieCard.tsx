import Image from "next/image";
import Link from "next/link";
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
    <div className="md:mr-4 md:mb-4 cursor-pointer">
      <Link href={`https://vidsrc.net/embed/${props.id}`} target="_blank">
        <Image
          alt=""
          width={200}
          height={266}
          src={props.i?.imageUrl || ""}
          className="rounded-[4px] aspect-auto"
        />
      </Link>
    </div>
  );
};

export default MovieCard;
