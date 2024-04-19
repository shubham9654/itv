import MovieCard from "@/components/cards/MovieCard";
import axios from "axios";

export default async function WatchMovie({
  params,
}: {
  params: { id: string };
}) {
  const { data } = await axios.get(
    `https://getsuperembed.link/?video_id=${params.id}`
  );

  return (
    <div className="mx-auto mt-4 mb-16 max-w-[1440px] flex justify-center">
      <div className="flex flex-wrap">
      {data.d?.length > 0
        ? data.d.map((movie: any, index: Number) => (
            <MovieCard key={index} {...movie} />
          ))
        : null}

      </div>
    </div>
  );
}
