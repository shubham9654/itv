"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const bannerData = [
  {
    imdbId: "tt4154796",
    image: "/banner3.jpeg",
  },
  {
    imdbId: "tt2948372",
    image: "/banner1.jpeg",
  },
];

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
        {bannerData.map((el, index) => (
          <CarouselItem key={index} className="banner_shadow">
            <Link
              href={`https://vidsrc.net/embed/${el.imdbId}`}
              target="_blank"
            >
              <Image alt="banner1" height={480} width={1440} src={el.image} />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="w-10 h-10 left-4" />
      <CarouselNext className="w-10 h-10 right-4" />
    </Carousel>
  );
};

export default BannerCarousel;
