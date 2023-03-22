import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Reviews() {
  const star = <FontAwesomeIcon icon={faStar} />;
  return (
    <div className="flex flex-col mx-auto w-10/12 md:flex-row justify-between my-10 text-textcolor ">
      <div className="w-full mx-auto self-center space-y-4 text-center">
        <h1 className="text-3xl mx-auto w-9/12">The Highest Rating App</h1>
        <h1 className="font-semibold text-3xl font-semibold text-darkblue">
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
      <div className="md:w-full flex justify-end">
        <img src="ReviewsImage.png" className="" />
      </div>
    </div>
  );
}

export default Reviews;
