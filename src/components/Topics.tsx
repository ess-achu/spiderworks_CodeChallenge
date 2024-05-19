import { useEffect } from "react";
import TopicContainer from "./Themes/TopicContainer";
import "./Topics.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Topics = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-yellow-50 main grid grid-flow-row place-items-center gap-0" data-aos='fade-up' id="topics">
      <p className="pt-28">TOPICS</p>
      <h1 className="text-5xl font-serif">Most Searched Ones</h1>
      <div className="topics grid grid-flow-col grid-rows-2 gap-4">
        <TopicContainer textContent="Eligibility" />
        <TopicContainer textContent="F1 Visa Students" />
        <TopicContainer textContent="Universities" />
        <TopicContainer textContent="Admission" />
        <TopicContainer textContent="Companies" />
        <TopicContainer textContent="Jobs" />
      </div>
      <div className="discussion grid grid-flow-col place-items-center">
        <h3 className="font-sans m-1">Didn't find what your topic?</h3>
        <div className="bg-red-50 w-12 h-9 grid place-items-center border rounded-2xl">
          <svg
            className="h-4 w-4 text-red-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <h3 className="font-sans italic m-1">Start discussion</h3>
      </div>
    </div>
  );
};

export default Topics;
