import BannerCarousel from "@/components/carousel/BannerCarousel";
import MovieCarousel from "@/components/carousel/MovieCarousel";

const movieData = [
  {
    title: "12th Fail",
    imdbId: "tt23849204",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTJlY2U2ZmYtMzU3Ny00ZDI3LWEwMDYtOWIxNzdhZDI5ZWRkXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_QL75_UY562_CR24,0,380,562_.jpg",
  },
  {
    title: "Ramayana: The Legend of Prince Rama",
    imdbId: "tt0259534",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTJjZTViZTEtNGVhNy00ODlmLTg2YTEtZDQ4NzBiNGMzMGJkXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_QL75_UX380_CR0,4,380,562_.jpg",
  },
  {
    title: "96",
    imdbId: "tt7019842",
    image:
      "https://m.media-amazon.com/images/M/MV5BOGM2YzI4ZjItYjA4Mi00ZDhiLTk1OGEtZmEzN2U3ODNkNTEzXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_QL75_UY562_CR14,0,380,562_.jpg",
  },
  {
    title: "Sita Ramam",
    imdbId: "tt20850406",
    image:
      "https://m.media-amazon.com/images/M/MV5BN2RjZDJhYzUtOTQ5Yy00OWM3LWE5OTctM2Y0YWVmNzAzODllXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_QL75_UX380_CR0,5,380,562_.jpg",
  },
  {
    title: "3 Idiots",
    imdbId: "tt1187043",
    image:
      "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_QL75_UY562_CR5,0,380,562_.jpg",
  },
  {
    title: "777 Charlie",
    imdbId: "tt7466810",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDhhMjBlMWYtMDVlMy00ZjM3LTg3MTUtZDg0NjA0YzcxOGY4XkEyXkFqcGdeQXVyMTE0MzY0NjE1._V1_QL75_UX380_CR0,0,380,562_.jpg",
  },
  {
    title: "Soorarai Pottru",
    imdbId: "tt10189514",
    image:
      "https://m.media-amazon.com/images/M/MV5BOGVjYmM0ZWEtNTFjNi00MWZjLTk3OTItMmFjMDAzZWU1ZDVjXkEyXkFqcGdeQXVyMTI2Mzk1ODg0._V1_QL75_UX380_CR0,35,380,562_.jpg",
  },
  {
    title: "Jersey",
    imdbId: "tt8948790",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjc0MWFiYTMtNmYyOS00ODczLWEyMzItNzI4YjY0YjJjZGVjXkEyXkFqcGdeQXVyNzEwNjg3MjE@._V1_QL75_UY562_CR11,0,380,562_.jpg",
  },
];

const movieData2 = [
  {
    title: "Moana",
    imdbId: "tt3521164",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  },
  {
    title: "Up",
    imdbId: "tt1049413",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTgyMzE3Nzg2OF5BMl5BanBnXkFtZTcwMzg0Mjc4Mg@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  },
  {
    title: "Coco",
    imdbId: "tt2380307",
    image:
      "https://m.media-amazon.com/images/M/MV5BYjQ5NjM0Y2YtNjZkNC00ZDhkLWJjMWItN2QyNzFkMDE3ZjAxXkEyXkFqcGdeQXVyODIxMzk5NjA@._V1_QL75_UY562_CR7,0,380,562_.jpg",
  },
  {
    title: "The Incredibles",
    imdbId: "tt0317705",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  },
  {
    title: "Turning Red",
    imdbId: "tt8097030",
    image:
      "https://m.media-amazon.com/images/M/MV5BOWYxZDMxYWUtNjNiZC00MDE1LWI2Y2QtNWZhNDAyMGY5ZjVhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  },
  {
    title: "Ratatouille",
    imdbId: "tt0382932",
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  },
  {
    title: "WALL·E",
    imdbId: "tt0910970",
    image:
      "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  },
  {
    title: "Zootropolis",
    imdbId: "tt2948356",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTMyMjEyNzIzMV5BMl5BanBnXkFtZTgwNzIyNjU0NzE@._V1_QL75_UX380_CR0,0,380,562_.jpg",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <BannerCarousel />
      <MovieCarousel headerTitle="Top Rated Movies" movieData={movieData} />
      <MovieCarousel headerTitle="Top Anime Movies" movieData={movieData2} />
    </div>
  );
}
