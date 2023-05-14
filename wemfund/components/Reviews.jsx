import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Reviews() {
  const star = <FontAwesomeIcon icon={faStar} />;
  return (
    <div className="flex flex-col mx-auto lg:w-10/12 w-11/12 lg:flex-row my-10 text-textcolor ">
      <div className="lg:w-1/2 mx-auto self-center space-y-4 text-center lg:py-0 py-5">
        <h1 className="lg:text-3xl text-2xl mx-auto lg:w-10/12">The Highest Rating Payment App</h1>
        <h1 className="font-semibold lg:text-3xl  text-2xl text-darkblue">
          Trippayer App
        </h1>
        <h1 className="lg:text-4xl text-3xl font-bold text-darkblue">99%</h1>
        <h1 className="lg:text-4xl text-3xl font-bold text-darkblue">
          {star} &nbsp;
          {star} &nbsp;
          {star} &nbsp;
          {star} &nbsp;
          {star} &nbsp;
        </h1>
        <h1 className="lg:text-3xl text-2xl mx-auto w-9/12">5- Star Rating</h1>
      </div>
      <div className="lg:w-1/2 flex flex-col">
        <img src="ReviewsImage.png" className="self-center" />
      </div>
    </div>
  );
}

export default Reviews;
