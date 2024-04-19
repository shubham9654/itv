"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {};

const BannerCarousel = (props: Props) => {
  const plugin = React.useRef(Autoplay({ delay: 3000 }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="mb-12 relative "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="banner_shadow">
            <Image
              alt="banner1"
              height={480}
              width={1440}
              src="https://cdn1.edgedatg.com/aws/v2/abc/AbbottElementary/showimages/ca1b90ddbac331b9dc20756a66253c6e/1440x480-Q80_ca1b90ddbac331b9dc20756a66253c6e.jpg"
              
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="w-10 h-10 left-4" />
      <CarouselNext className="w-10 h-10 right-4" />
    </Carousel>
  );
};

export default BannerCarousel;
