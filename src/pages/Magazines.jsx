import React from "react";

export default function Magazines() {
  return (
    <div
      style={{ backgroundImage: 'url("mag1.jpg")' }}
      className="bg-cover py-20"
    >
      <p className="text-center font-serif text-5xl font-bold   bg-cover text-red-500  ">
        OUR MONTHLY MAGAZINES
      </p>

      <div className="  flex justify-center items-center gap-6 my-10">
        <div className="w-[200px] bg-gray-600 rounded-md py-4 ">
          <p className="text-center text-lg font-serif font-semibold">
            Anurag reports
          </p>
          <img src="mag2.webp" alt="" className="h-[200px] w-[150px] m-auto" />
          <p className="text-center text-[5px]">
            lets start a new journey with me
          </p>
        </div>
        <div className="w-[200px] bg-gray-600 rounded-md py-4">
          <p className="text-center text-lg font-serif font-semibold">
            Anurag reports
          </p>
          <img src="mag3.jpg" alt="" className="h-[200px] w-[150px] m-auto" />
          <p className="text-center text-[5px]">
            lets start a new journey with me
          </p>
        </div>
        <div className="w-[200px] bg-gray-600 rounded-md py-4">
          <p className="text-center text-lg font-serif font-semibold">
            Anurag reports
          </p>
          <img src="mag4.jpg" alt="" className="h-[200px] w-[150px] m-auto" />
          <p className="text-center text-[5px]">
            lets start a new journey with me
          </p>
        </div>
        <div className="w-[200px] bg-gray-600 rounded-md py-4">
          <p className="text-center text-lg font-serif font-semibold">
            Anurag reports
          </p>
          <img src="mag2.webp" alt="" className="h-[200px] w-[150px] m-auto" />
          <p className="text-center text-[5px]">
            lets start a new journey with me
          </p>
        </div>
        <div className="w-[200px] bg-gray-600 rounded-md py-4">
          <p className="text-center text-lg font-serif font-semibold">
            Anurag reports
          </p>
          <img src="mag3.jpg" alt="" className="h-[200px] w-[150px] m-auto" />
          <p className="text-center text-[5px]">
            lets start a new journey with me
          </p>
        </div>
      </div>

      <div className="w-[50%] m-auto">
        <p className="text-center font-bold text-lg text-red-600 my-4">
          Subscribe Us
        </p>
        <p className="text-center text-lg font-bold tracking-widest ">
          Monthy charges
          <button className="bg-yellow-400 py-2 px-4 rounded-lg font-bold text-white hover:text-blue-600">
            Rs.500/month
          </button>
        </p>
      </div>
    </div>
  );
}