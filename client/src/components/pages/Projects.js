import React from "react";

export default function Projects(props) {
  return (
    <div name="Projects" className="w-full h-screen bg-indigo-600 text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full flex justify-center py-10">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 text-orange-200 border-cyan-100">
              {props.title}
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="" alt="icon" />
            <p className="my-4">Project 1</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="" alt="icon" />
            <p className="my-4">Project 2</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="" alt="icon" />
            <p className="my-4">Project 3</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="" alt="icon" />
            <p className="my-4">Project 4</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="" alt="icon" />
            <p className="my-4">Project 5</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="" alt="icon" />
            <p className="my-4">Project 6</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="" alt="icon" />
            <p className="my-4">Project 7</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src="" alt="icon" />
            <p className="my-4">Project 7</p>
          </div>
        </div>
      </div>
    </div>
  );
}
