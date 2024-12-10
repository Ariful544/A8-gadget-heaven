import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center my-12">
      <h1 className="text-2xl md:text-3xl text-gray-800 lg:text-4xl font-medium mb-4">
        {title}
      </h1>
      <p className="text-base text-gray-800 text-center ">
        {subtitle}
      </p>
    </div>
  );
};

export default Heading;
