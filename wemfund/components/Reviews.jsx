import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Reviews() {
  const star = <FontAwesomeIcon icon={faStar} />;
  return (
    <div className="flex flex-col mx-auto w-10/12 md:flex-row my-10 text-textcolor ">
      <div className="w-1/2 mx-auto self-center space-y-4 text-center">
        <h1 className="text-3xl mx-auto w-9/12">The Highest Rating App</h1>
        <h1 className="font-semibold text-3xl text-darkblue">
          Trippayer App
        </h1>
        <h1 className="text-4xl font-bold text-darkblue">99%</h1>
        <h1 className="text-4xl font-bold text-darkblue">
          {star} &nbsp;
          {star} &nbsp;
          {star} &nbsp;
          {star} &nbsp;
          {star} &nbsp;
        </h1>
        <h1 className="text-3xl mx-auto w-9/12">5- Star Rating</h1>
      </div>
      <div className="md:w-1/2 flex flex-col">
        <img src="ReviewsImage.png" className="self-center" />
      </div>
    </div>
  );
}

export default Reviews;
