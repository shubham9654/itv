import HeroBanner from "@/components/banner/HeroBanner";
import MovieList from "@/components/card/movieList";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <HeroBanner />
      <MovieList />
    </div>
  );
}
