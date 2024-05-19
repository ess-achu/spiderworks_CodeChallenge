import "./DiscussContainer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const DiscussContent = (props: any) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="grid grid-flow-col gap-24 place-items-center pt-5" data-aos='fade-up'>
        <img src={props.imageUrl} className="w-16 h-16 border rounded-full" />
        <div>
          <h1 className="font-sans font-medium text-2xl">
            {props.postDescription}
          </h1>
          <h3 className="name font-sans text-xs text-gray-400">
            Posted by {props.postOwner}
          </h3>
        </div>
        <div className="response bg-violet-100 h-10 w-36 grid grid-flow-col border-0 rounded-3xl place-items-center">
          <svg
            className="h-6 w-6 text-red-500"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />{" "}
            <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
          </svg>
          <p>{props.responseCount} responses</p>
        </div>
        <button className="join bg-black text-white border-0 rounded-xl font-sans grid place-items-center">
          View Answers
        </button>
      </div>
      <div className="line"></div>
    </>
  );
};

export default DiscussContent;
