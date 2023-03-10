import React from "react";

function Features() {
  return (
    <div className="my-10 text-[open sans] flex text-textcolor justify-around space-x-10 mx-auto w-11/12">
      <div>
        <div className="bg-darkblue  w-20 h-20 rounded-full">
          <img
            src="/Online payment.png"
            className="rounded-full w-20 h-20 p-2"
          />
        </div>
        <div className="space-y-4 mt-2">
          <h1 className="font-semibold text-darkblue text-2xl">Pay for Ride</h1>
          <p>
            Millions of Nigerians trust us with their money. We ensure that your
            money is safe by complying with he highest global security
            standards.
          </p>
        </div>
      </div>
      <div>
        <div className="bg-darkblue  w-20 h-20 rounded-full">
          <img src="/multipayment.png" className="rounded-full w-20 h-20 p-2" />
        </div>
        <div className="space-y-4 mt-2">
          <h1 className="font-semibold text-darkblue text-2xl">
            Recieve Funds
          </h1>
          <p className="">
            Millions of Nigerians trust us with their money. We ensure that your
            money is safe by complying with he highest global security
            standards.
          </p>
        </div>
      </div>
      <div>
        <div className="bg-darkblue  w-20 h-20 rounded-full">
          <img src="/nfc payment.png" className="rounded-full w-20 h-20 p-2" />
        </div>
        <div className="space-y-4 mt-2">
          <h1 className="font-semibold text-darkblue text-2xl">
            Top Up For Emergency
          </h1>
          <p>
            Millions of Nigerians trust us with their money. We ensure that your
            money is safe by complying with he highest global security
            standards.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
