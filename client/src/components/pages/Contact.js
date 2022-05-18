import React from "react";
import { FaRegEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <div name="Contact" className="w-full h-screen bg-indigo-600 text-white h-full">
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="flex flex-col items-center mt-32">
          <p className="text-4xl text-green-400 font-bold inline border-b-4 border-cyan-100">
            Contact Me
          </p>
          <p className="pt-5 text-cyan-100 text-xl">
            Feel free to reach out to me and I look forward to hearing from you!
          </p>
          <div className="pt-10">
            <a href="mailto:l2odingo@gmail.com">
              <div className="flex justify-between bg-cyan-600 text-xl p-3 hover:bg-cyan-700">
                <FaRegEnvelope size={30} />
                <span className="ml-5">l2odingo@gmail.com</span>
              </div>
            </a>
          </div>
          <div className="w-full pt-10">
            <form className="flex flex-col max-w-[600px]">
              <input
                className="bg-[#ccd6f6] p-2 text-black"
                type="text"
                placeholder="Name"
                name="name"
              />
              <input
                className="my-4 p-2 bg-[#ccd6f6] text-black"
                type="email"
                placeholder="Email"
                name="email"
              />
              <textarea
                className="bg-[#ccd6f6] p-2 text-black"
                name="message"
                rows="10"
                placeholder="Message"
              ></textarea>
              <button className="text-purple-300 hover:text-white-300 font-bold border-gray-400 border-2 hover:bg-purple-600 hover:border-purple-300 px-4 py-3 my-8 mx-auto flex items-center">
                Submit!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
