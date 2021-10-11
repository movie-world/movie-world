import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Loading } from "../components/loading";

const GET_MOVIE = gql`
  query getMovie($movie_id: Int!) {
    movie(movie_id: $movie_id) {
      title
      rating
      description_intro
      large_cover_image
      like_count
      runtime
      year
    }
    suggesions(movie_id: $movie_id) {
      id
      title
      medium_cover_image
      year
    }
  }
`;

export const Detail = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(GET_MOVIE, {
    variables: { movie_id: parseInt(id) },
  });

  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.log(error);
    return <span>error</span>;
  }
  //   console.log(data);
  return (
    <>
      <Helmet>
        <title>{data.movie.title} | Movie World</title>
      </Helmet>
      <div className="overflow-y-auto scrollbar-hide  h-screen flex flex-col items-center transition-all bg-gray-900">
        <header>
          <h1 className="h-14 flex items-center text-white text-3xl sm:h-36 sm:text-5xl">
            Movie World
          </h1>
        </header>
        <main className="max-w-5xl container w-screen h-screen px-2 mt-4 text-center text-white">
          <div className="sm:flex sm:flex-row">
            <img
              className="w-full min-w-12 h-3/4 rounded-md object-cover px-1 py-1 bg-white sm:min-w-24 sm:max-w-sm"
              src={data.movie.large_cover_image}
              alt={data.movie.title}
            />
            <div className="mt-4">
              <h1 className="mb-4 text-2xl">
                {data.movie.title}
                <span className="text-sm"> ({data.movie.year})</span>
              </h1>
              <span className="text-xl">{data.movie.description_intro}</span>
            </div>
          </div>
          <div className="my-4 text-lg">추천영화</div>
          <ul className="list-none container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {data?.suggesions?.map((movie: any) => (
              <Link key={movie.id} to={`/${movie.id}`}>
                <li className="w-full min-w-12 h-96 text-white text-center truncate">
                  <img
                    className="w-full min-w-12 h-80 rounded-md px-1 py-1 bg-white"
                    src={movie.medium_cover_image}
                    alt={movie.title}
                  />
                  <span>{movie.title}</span>
                  <div className="text-sm">({movie.year})</div>
                </li>
              </Link>
            ))}
          </ul>
        </main>
        {/* <footer className="text-white">footer</footer> */}
      </div>
    </>
  );
};
