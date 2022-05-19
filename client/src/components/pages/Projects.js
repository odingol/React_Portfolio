import React from "react";

export default function Projects(props) {
  return (
    <div name="Projects" className="w-full h-screen bg-indigo-600 text-white pt-10">
      <div className="flex flex-col justify-center items-center w-full h-full p-15">
        <div className="max-w-[1000px] w-full flex justify-center py-5">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 text-orange-200 border-cyan-100">
              {props.title}
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-5 px-10">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-blue-800 max-h-80">
            <a href="https://taylor25et.github.io/Project-1-KrustyKrabs/" target="_blank" rel="noreferrer">
            <img className="w-50" src="./img/project-1-img.jpg" alt="Krusty Krab icon" />
            <p className="my-10 text-xl">Krusty Krab</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-blue-800 max-h-80">
            <a href="https://odingol.github.io/04-hw-web-api/develop/" target="_blank" rel="noreferrer">
            <img className="w-50" src="./img/project-2-img.jpg" alt="Coding Quiz icon" />
            <p className="my-10 text-xl">Coding Quiz</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-blue-800 max-h-80">
            <a href="https://odingol.github.io/06-hw-weather-dashboard/" target="_blank" rel="noreferrer">
            <img className="w-50" src="./img/project-3-img.jpg" target="_blank" alt="Weather Dashboard icon" />
            <p className="my-10 text-xl">Weather Dashboard</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-blue-800 items-center max-h-80">
            <a href="https://travalotpj2.herokuapp.com/" target="_blank" rel="noreferrer">
            <img className="w-full max-h-56" src="./img/project-4-img.jpg" target="_blank" alt="TravAlot icon" />
            <p className="my-10 text-xl">TravAlot</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-blue-800 items-center">
            <a href="https://letstalktechh.herokuapp.com/" target="_blank" rel="noreferrer">
            <img className="w-full max-h-56" src="./img/project-5-img.png" target="_blank" alt="LetsTalkTech icon" />
            <p className="my-10 text-xl">LetsTalkTech</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
