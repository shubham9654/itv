import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

type Props = {
  headerTitle: string;
  movieData: {
    title: string;
    imdbId: string;
    image: string;
  }[];
};

const MovieCarousel = ({ headerTitle, movieData }: Props) => {
  return (
    <div className="mx-auto mt-4 mb-16 pl-3 md:px-10 lg:px-16 max-w-[1440px]">
      <h2 className="text-lg">{headerTitle}</h2>
      <div className="pt-1.5">
        <Carousel className="w-full max-w-full">
          <CarouselContent className="-ml-1">
            {movieData.map((movie, index) => (
              <CarouselItem
                key={index}
                className="pl-1.5 md:pl-1 basis-[45%] md:basis-1/5 lg:basis-1/6"
              >
                <Link href={`https://vidsrc.net/embed/${movie.imdbId}`} target="_blank">
                  <Image
                    alt=""
                    width={200}
                    height={266}
                    src={movie.image}
                    className="rounded-[4px]"
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="w-10 h-10 -left-3 md:-left-1" />
          <CarouselNext className="w-10 h-10 -right-3" />
        </Carousel>
      </div>
    </div>
  );
};

export default MovieCarousel;
