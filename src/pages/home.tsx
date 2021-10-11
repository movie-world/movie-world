import { gql, useQuery } from "@apollo/client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Loading } from "../components/loading";

const GET_MOVIES = gql`
  query getMovies {
    movies {
      id
      title
      medium_cover_image
      year
    }
  }
`;
export const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <>
      <Helmet>
        <title>Movie World</title>
      </Helmet>
      <div className="overflow-y-auto scrollbar-hide h-screen flex flex-col items-center min-w-24 bg-gray-900 transition-all">
        <header>
          <h1 className="h-14 flex items-center text-white text-3xl sm:h-36 sm:text-5xl">
            Movie World
          </h1>
        </header>
        <ul className="list-none container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {data?.movies?.map((movie: any) => (
            <Link key={movie.id} to={`/${movie.id}`}>
              <li className="w-full min-w-12 h-96 sm:h-104 text-white text-center truncate">
                <img
                  className="w-full min-w-12 h-80 sm:h-100 rounded-md px-1 py-1 bg-white"
                  src={movie.medium_cover_image}
                  alt={movie.title}
                />
                <span>{movie.title}</span>
                <div className="text-sm">({movie.year})</div>
              </li>
            </Link>
          ))}
        </ul>
        {/* <footer className="text-white">footer</footer> */}
      </div>
    </>
  );
};
