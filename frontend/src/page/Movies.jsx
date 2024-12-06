import React from "react";
import { movies } from "../data";
import Card from "../component/Card";

const Movies = () => {
  return (
    <>
      {/* filter */}
      <div></div>
      <Card movies={movies} />
      <Card movies={movies} />
      <Card movies={movies} />
      <Card movies={movies} />
      <Card movies={movies} />
      <Card movies={movies} />
    </>
  );
};

export default Movies;
