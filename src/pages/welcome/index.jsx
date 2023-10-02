import React from "react";
import { useGetMoviesQuery } from "../../app/api";

export const WelcomePage = () => {
  const { data, isLoading } = useGetMoviesQuery();
  console.log(data);
  return <div>index</div>;
};
