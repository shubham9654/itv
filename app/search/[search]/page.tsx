import MovieCard from "@/components/cards/MovieCard";
import axios from "axios";

export default async function SearchPage({
  params,
}: {
  params: { search: string };
}) {
  const { data } = await axios.get(
    `https://v3.sg.media-imdb.com/suggestion/titles/x/${params.search}.json`
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
