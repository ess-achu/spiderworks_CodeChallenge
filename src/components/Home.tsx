import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const dot = () => {
    return <span className="dot"></span>;
  };
  return (
    <div className="grid grid-flow-row place-items-center" data-aos="fade-up">
      <div className="coverSpace w-full h-12"></div>
      <h1>Forum</h1>
      <h1>
        <p className="font-sans text-3xl font-semibold grid grid-flow-col">
          Discuss &{" "}
          <p className="font-mono italic text-3xl font-semibold">
            &nbsp;Evolve
          </p>
        </p>
      </h1>
      <h3 className="mt-4 font-sans text-gray-500 text-base">
        Engage with fellow professionals: Join the Program Forum Discussion
      </h3>
      <div className="searchMain w-96 border-2 rounded-3xl border-black grid grid-flow-col place-items-center mt-8">
        <input
          type="text"
          className="searchInput w-64 h-12 outline-none"
          placeholder="Search Topics"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          className="w-10 h-10"
        >
          <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="links grid grid-flow-col place-items-center gap-2 mt-12"><a href="#topics" className="topics">
        <div className="topics grid grid-flow-col place-items-center">
          
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
          
          <h3 className="font-sans m-1">START DISCUSSION</h3>
        </div></a>
        {dot()}
        <a href="#discuss" className="discuss">
          <div className="discussion grid grid-flow-col place-items-center">
            <div className="bg-blue-100 w-12 h-9 grid place-items-center border rounded-2xl">
              <svg
                className="h-4 w-4 text-blue-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
                <path
                  fillRule="evenodd"
                  d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="font-sans m-1">VIEW TOPICS</h3>
          </div>
        </a>
      </div>
      <div className="profilePicContainer w-full h-96 flex justify-center">
        <img
          src="src\assets\images\arrow.png"
          alt=""
          className="arrow w-16 h-36"
        />
      </div>
    </div>
  );
};

export default Home;
