import React from "react";
import { ScaleLoader } from "react-spinners";

export const Loading = () => {
  return (
    <div className="bg-gray-900 w-screen h-screen flex flex-col items-center justify-center text-center text-white">
      <ScaleLoader height="80px" width="32px" color="#6b5ce7" radius="8px" />
      <p>loading...</p>
    </div>
  );
};
