import React, {useState} from "react";


export default function Home(currentPage, handlePageChange) {
  const [intro, setIntro] = useState({
    name: "Lamor Odingo",
    position: "I am a Front End Developer",
    direction: "Below you will view the list of work I have completed on my journey to become a Web Developer and the best ways to reach out to me. Enjoy!"
  })

  return (
    <div name="Home" className="w-full h-screen flex justify-center items-center bg-indigo-600">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white">Hello World! My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-green-300">
          {intro.name}
        </h1>
        <h2 className="text-4xl font-bold text-orange-300">
          {intro.position}
        </h2>
        <p className="text-white py-4 max-w-[700px]">
       {intro.direction}
        </p>
        <div>
            <button className="animate-bounce hover:animate-none hover:bg-blue-300 bg-blue-200 px-10 py-3 text-xl uppercase mt-10 rounded-lg">
              {/* Apply Link to Projects section HERE */}
              <a href="#projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
              View My Work
              </a>
            </button>
        </div>
      </div>
    </div>
  );
}
