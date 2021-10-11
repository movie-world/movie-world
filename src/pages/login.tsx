import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_MOVIES = gql`
  query getMovies {
    movies {
      id
      title
      medium_cover_image
    }
  }
`;
export const Login = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className="h-screen flex flex-col items-center min-w-24 bg-gray-600">
      <header>
        <h1 className="h-14 flex items-center text-white text-3xl">
          Movie World
        </h1>
      </header>
      <ul className="list-none overflow-y-auto container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {data?.movies?.map((movie: any) => (
          <li
            className="w-full min-w-12 h-64 text-white text-center truncate"
            key={movie.id}
          >
            <img
              className="w-full min-w-12 h-56 rounded-md"
              src={movie.medium_cover_image}
              alt=""
            />
            <span>{movie.title}</span>
          </li>
        ))}
      </ul>
      <footer className="text-white">footer</footer>
    </div>
  );
};
