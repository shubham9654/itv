import BannerCarousel from "@/components/carousel/BannerCarousel";
import MovieCarousel from "@/components/carousel/MovieCarousel";

const movieData = [
  {title: "American Idol", image: "https://cdn1.edgedatg.com/aws/v2/abc/AmericanIdol/showimages/5923a25d8071faeffdf0ab22ddb849fb/227x303-Q80_5923a25d8071faeffdf0ab22ddb849fb.jpg"},
  {title: "Movie 1", image: "https://cdn1.edgedatg.com/aws/v2/abc/911/showimages/9ede908fe750615e2ba2e7fdc2cdf279/227x303-Q80_9ede908fe750615e2ba2e7fdc2cdf279.jpg"},
  {title: "Movie 2", image: "https://cdn1.edgedatg.com/aws/v2/abc/TheRookie/showimages/c7ac968ca9c6d3c2526b6e22ff618ed3/227x303-Q80_c7ac968ca9c6d3c2526b6e22ff618ed3.jpg"},
  {title: "Movie 3", image: "https://cdn1.edgedatg.com/aws/v2/abc/AmericanIdol/showimages/5923a25d8071faeffdf0ab22ddb849fb/227x303-Q80_5923a25d8071faeffdf0ab22ddb849fb.jpg"},
  {title: "abc", image: "https://cdn1.edgedatg.com/aws/v2/abc/JimmyKimmelLive/showimages/307313f01a17971a0ab152a35dd45de2/227x303-Q80_307313f01a17971a0ab152a35dd45de2.jpg"},
  {title: "abc", image: "https://cdn1.edgedatg.com/aws/v2/abc/TheGoodDoctor/showimages/b0e65a267c86dfe2fd2749fbc56017fe/227x303-Q80_b0e65a267c86dfe2fd2749fbc56017fe.jpg"},
  {title: "abc", image: "https://cdn1.edgedatg.com/aws/v2/abc/GreysAnatomy/showimages/33f615a4d9bc89295cd3484529c90f47/227x303-Q80_33f615a4d9bc89295cd3484529c90f47.jpg"},
  {title: "abc", image: "https://cdn1.edgedatg.com/aws/v2/abc/JimmyKimmelLive/showimages/307313f01a17971a0ab152a35dd45de2/227x303-Q80_307313f01a17971a0ab152a35dd45de2.jpg"},
  {title: "abc", image: "https://cdn1.edgedatg.com/aws/v2/abc/TheGoodDoctor/showimages/b0e65a267c86dfe2fd2749fbc56017fe/227x303-Q80_b0e65a267c86dfe2fd2749fbc56017fe.jpg"},
  {title: "abc", image: "https://cdn1.edgedatg.com/aws/v2/abc/GreysAnatomy/showimages/33f615a4d9bc89295cd3484529c90f47/227x303-Q80_33f615a4d9bc89295cd3484529c90f47.jpg"}
]

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <BannerCarousel />
      <MovieCarousel headerTitle="Top Movies" movieData={movieData}/>
      <MovieCarousel headerTitle="Top Shows" movieData={movieData} />
    </div>
  );
}
