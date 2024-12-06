import Card from "../component/Card";
import "swiper/css";
import "swiper/css/navigation";
import { movies } from "../data";

const Home = () => {
  return (
    <>
      <img
        src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1696826914/catalog/1711235676996620288/j57msoyfjw1wdrzmunhd.jpg"
        alt=""
        className="w-screen h-[60vh] object-cover"
      />
      <div className="py-2.5 px-7">
        <h1 className="text-xl font-bold">Trending</h1>
        <Card movies={movies} />
      </div>
    </>
  );
};

export default Home;
