import { useEffect } from "react";
import "./App.css";
import Discussion from "./components/Discussion";
import Home from "./components/Home";
import Topics from "./components/Topics";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  const dot = () => {
    return <span className="dot"></span>;
  };

  return (
    <>
      <header className="w-full h-28 border-b-2 bg-white grid grid-rows-1 grid-flow-col gap-8 place-items-center" data-aos='fade-up'>
        <img src="src\assets\images\logo.png" className="pl-8" />
        <div className="grid grid-rows-1 grid-flow-col gap-3 font-sans text-lg place-items-center">
          <p className="">Learn</p> <p>{dot()}</p> <p>How do I participate?</p>{" "}
          <p>{dot()}</p> <p>Universities</p> <p>{dot()}</p> <p>Corporate</p>
        </div>
        <div className="grid grid-rows-1 grid-flow-col place-items-center">
          <div className="searchContainer grid place-items-center w-13 h-13 border rounded-full bg-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
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
          <div className="searchConnector w-1 h-3 bg-black"></div>
          <button className="join bg-black text-white border-0 rounded-3xl font-sans grid place-items-center hover:bg-white hover:text-black hover:border-2">
            Join program
          </button>
        </div>
      </header>
      <div className="fixedBarContainer font-sans bg-white">
        <div className="fixedBar fixed w-7/12 h-16 border-2 rounded grid grid-flow-col place-items-center bg-white">
          <div className="grid grid-flow-col place-items-center gap-12">
            <div className="logoContainer absolute left-0">
              <img
                src="src\assets\images\logo.png"
                className="pl-8 w-21 h-16"
              />
            </div>
            <div className="grid grid-flow-col place-items-center pl-3 gap-4">
              <div className="menu">
                <button className="joinFixed bg-black text-white border-0 rounded-3xl font-sans grid grid-flow-col place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  Menu
                </button>
              </div>
              <div className="disscuss">
                <button className="discussButton grid grid-flow-col place-items-center border-2 rounded-3xl">
                  <svg
                    className="h-4 w-4 text-black"
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
                  <p>Discuss CPT</p>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-1 grid-flow-col place-items-center">
            <div className="searchContainer grid place-items-center w-13 h-13 border rounded-full bg-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
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
            <div className="searchConnector w-1 h-3 bg-black"></div>
            <button className="joinFixed bg-black text-white border-0 rounded-3xl font-sans grid place-items-center hover:bg-white hover:text-black hover:border-2">
              Join program
            </button>
          </div>
        </div>
      </div>
      <Home />
      <Topics />
      <Discussion />
    </>
  );
}

export default App;
