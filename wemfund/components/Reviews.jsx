import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Reviews() {
  const star = <FontAwesomeIcon icon={faStar} />;
  return (
    <div className="flex flex-col space-y-10 md:flex-row justify-between my-10 text-textcolor ">
      <div className="w-full mx-auto self-center space-y-4 text-center">
        <h1 className="text-2xl mx-auto w-9/12">The Highest Rating App</h1>
        <h1 className="font-semibold text-3xl font-semibold text-darkblue">
          Wemfund App
        </h1>
        <h1 className="text-3xl font-bold text-darkblue">99%</h1>
        <h1 className="text-3xl font-bold text-darkblue">
          {star} &nbsp;
          {star} &nbsp;
          {star} &nbsp;
          {star} &nbsp;
          {star} &nbsp;
        </h1>
        <h1 className="text-2xl mx-auto w-9/12">5- Star Rating</h1>
      </div>
      <div className="mx-auto md:w-full">
        <img src="ReviewsImage.png" />
      </div>
    </div>
  );
}

export default Reviews;
