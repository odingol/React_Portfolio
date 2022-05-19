import React from 'react';



export default function About(props) {

    const bio = "One of the great things about being a developer is the ability to change a user's experience with just a few lines of code. By studying and writing code each week I learn something new that helps improve my job as a developer. If I get better, then users have a better experience. I specialize in... "

    return (
    <div name="About" className="w-full h-screen bg-blue-900 text-white">
        <div className="flex flex-col justify-center items-center w-full h-full px-10 py-10">
            <div className="max-w-[1000px] w-full flex justify-center py-10">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl text-orange-300 font-bold inline border-b-4 border-cyan-100">{props.title}</p>
                </div>
            </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="px-5">
                <img src="./img/portfolio-bg-image.jpg" alt="Profile Headshot" />
            </div>
            <div className="text-2xl px-5 italic">
                <p className="text-white">{bio}</p>
            </div>
        </div>
        </div>
    </div>
    );
}