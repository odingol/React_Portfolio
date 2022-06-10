import React from "react";

export default function Projects() {
  return (
    <div name="Projects" className="w-full h-full h-screen bg-indigo-600 text-white pt-10">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full flex justify-center py-5">
          <div className="sm:text-right pb-8 pl-4 pt-6">
            <p className="text-4xl font-bold inline border-b-4 text-orange-200 border-cyan-100">
              Projects
            </p>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-1 px-14">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-blue-800 max-h-90 m-4">
            <img className="w-50" src="./img/project-1-img.jpg" alt="Krusty Krab icon" />
            <p className="my-5 text-xl">Krusty Krab</p>
            <p className="my-3 text-xl hover:text-orange-300"><a href="https://animated-taffy-0b25b0.netlify.app" target="_blank" rel="noreferrer">Deployed Site</a></p>
            <p className="text-xl hover:text-orange-300"><a href="https://github.com/odingol/Project-1-KrustyKrabs" target="_blank" rel="noreferrer">Source Code</a></p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-blue-800 max-h-90 m-3">
            <img className="w-50" src="./img/project-2-img.jpg" alt="Coding Quiz icon" />
            <p className="my-5 text-xl">Coding Quiz</p>
            <p className="my-3 text-xl hover:text-orange-300"><a href="https://lucent-cassata-212b1d.netlify.app" target="_blank" rel="noreferrer">Deployed Site</a></p>
            <p className="text-xl hover:text-orange-300"><a href="https://github.com/odingol/code-quiz" target="_blank" rel="noreferrer">Source Code</a></p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-blue-800 max-h-90 m-4">
            <img className="w-50" src="./img/project-3-img.jpg" target="_blank" alt="Weather Dashboard icon" />
            <p className="my-5 text-xl">Weather Dashboard</p>
            <p className="my-3 text-xl hover:text-orange-300"><a href="https://frabjous-tartufo-5698eb.netlify.app" target="_blank" rel="noreferrer">Deployed Site</a></p>
            <p className="text-xl hover:text-orange-300"><a href="https://github.com/odingol/weather-dashboard" target="_blank" rel="noreferrer">Source Code</a></p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-blue-800 items-center m-4">
            <img className="w-full max-h-56" src="./img/project-6-img.png" target="_blank" alt="LetsTalkTech icon" />
            <p className="my-5 text-xl">Date-A-Base</p>
            <p className="my-3 text-xl hover:text-orange-300"><a href="https://calm-hamlet-19238.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Site</a></p>
            <p className="my-4 text-xl hover:text-orange-300"><a href="https://github.com/odingol/Date-A-Base" target="_blank" rel="noreferrer">Source Code</a></p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-blue-800 items-center max-h-90 m-4">
            <img className="w-full max-h-56" src="./img/project-4-img.jpg" target="_blank" alt="TravAlot icon" />
            <p className="my-4 text-xl">TravAlot</p>
            <p className="my-4 text-xl hover:text-orange-300"><a href="https://travalotpj2.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Site</a></p>
            <p className="my-4 text-xl hover:text-orange-300"><a href="https://github.com/odingol/TravAlot" target="_blank" rel="noreferrer">Source Code</a></p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-blue-800 items-center m-4">
            <img className="w-full h-56" src="./img/project-5-img.png" target="_blank" alt="LetsTalkTech icon" />
            <p className="my-5 text-xl">LetsTalkTech</p>
            <p className="my-5 text-xl hover:text-orange-300"><a href="https://letstalktechh.herokuapp.com/" target="_blank" rel="noreferrer">Deployed Site</a></p>
            <p className="my-3 text-xl hover:text-orange-300"><a href="https://github.com/odingol/letstalktech" target="_blank" rel="noreferrer">Source Code</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
