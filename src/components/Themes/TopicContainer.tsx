import "./TopicContainer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TopicContainer = (props: any) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container w-72 h-40 bg-black transition border-0 rounded-lg" data-aos='fade-up'>
      <h1 className="textContent text-white text-2xl">{props.textContent}</h1>
    </div>
  );
};

export default TopicContainer;
