const Card = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-5">
      {movies?.map((movie) => (
        <div
          key={movie.id}
          className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
        >
          <img
            src={movie.thumbnail}
            alt={movie.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
            {/* <p className="text-gray-700 text-sm mb-4">{movie.description}</p> */}
            <div className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Rating:</span> {movie.rating}
            </div>
            <div className="text-sm text-gray-600 mb-2">
              <span className="font-semibold">Release Date:</span>{" "}
              {movie.releaseDate}
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-semibold">Duration:</span> {movie.duration}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
