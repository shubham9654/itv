import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type Props = {};

const MovieList = (props: Props) => {
  return (
    <div className="mx-auto mt-4 mb-16 pl-10 md:px-10 lg:px-16 max-w-[1440px]">
      <h2 className="text-lg">CURRENT ABC SHOWS & SPECIALS</h2>
      <div className="pt-1.5">
        <Carousel className="w-full max-w-full">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 12 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <Image
                  alt=""
                  width={200}
                  height={266}
                  src="https://cdn1.edgedatg.com/aws/v2/abc/TheInterrogationTapesASpecialEditionOf2020/showimages/53902d8f04c69110be1d7c944ae1f97b/227x303-Q80_53902d8f04c69110be1d7c944ae1f97b.jpg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="w-10 h-10 -left-1" />
          <CarouselNext className="w-10 h-10 -right-3" />
        </Carousel>
      </div>
    </div>
  );
};

export default MovieList;
