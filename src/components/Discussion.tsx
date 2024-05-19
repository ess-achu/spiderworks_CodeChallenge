import DiscussContent from "./Themes/DiscussContent";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface Content {
  imageUrl: string;
  postDescription: string;
  postOwner: string;
  responseCount: number; // Changed from string to number
}

const contentList: Content[] = [
  {
    imageUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    postDescription: "Post description",
    postOwner: "Swaraj",
    responseCount: 12,
  },
  {
    imageUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    postDescription: "Post description",
    postOwner: "Swaraj",
    responseCount: 65,
  },
  {
    imageUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    postDescription: "Post description",
    postOwner: "Swaraj",
    responseCount: 6,
  },
  {
    imageUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    postDescription: "Post description",
    postOwner: "Swaraj",
    responseCount: 69,
  },
  {
    imageUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    postDescription: "Post description",
    postOwner: "Swaraj",
    responseCount: 12,
  },
  {
    imageUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    postDescription: "Post description",
    postOwner: "Swaraj",
    responseCount: 78,
  },
  {
    imageUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    postDescription: "Post description",
    postOwner: "Swaraj",
    responseCount: 23,
  },
  {
    imageUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    postDescription: "Post description",
    postOwner: "Swaraj",
    responseCount: 56,
  },
  {
    imageUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    postDescription: "Post description",
    postOwner: "Swaraj",
    responseCount: 34,
  },
  {
    imageUrl: "https://xsgames.co/randomusers/avatar.php?g=male",
    postDescription: "Post description",
    postOwner: "Swaraj",
    responseCount: 15,
  },
  {
    imageUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    postDescription: "Post description",
    postOwner: "Swaraj",
    responseCount: 45,
  },
  {
    imageUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    postDescription: "Post description",
    postOwner: "Swaraj",
    responseCount: 89,
  },
  {
    imageUrl: "https://xsgames.co/randomusers/avatar.php?g=female",
    postDescription: "Post description",
    postOwner: "Swaraj",
    responseCount: 92,
  },
];

const Discussion = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const date = new Date();
  const month = months[date.getMonth()];
  const day = date.getDate().toString().toUpperCase();
  const year = date.getFullYear();
  return (
    <div data-aos='fade-up' id="discuss">
      <div className="left w-2/3 grid grid-flow-row place-items-center">
        <div className="topLeft mt-12 grid grid-flow-col place-items-center">
          <div className="grid grid-flow-col place-items-center mr-24">
            <p>LATEST DISCUSSION AS OF</p>
            &nbsp;
            <div className="smallRectangle w-4 h-3 bg-red-900"></div>
            &nbsp;
            <p className="font-semibold">
              {month} {day} {year}{" "}
            </p>
          </div>
          <div className="grid grid-flow-col place-items-end">
            <div className="bg-blue-100 w-36 h-9 grid grid-flow-col place-items-center border rounded-2xl">
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
              <select className=" h-9 w-24 block bg-blue-100 border-none rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                <option className="">All topics</option>
                <option>Tech</option>
                <option>Facts</option>
                <option>Education</option>
              </select>
            </div>
          </div>
        </div>
        <div className="searchBar w-2/3 border-2 rounded-3xl border-black grid grid-flow-col place-items-center mt-8">
          <input
            type="text"
            className="searchInput w-3/4 h-12 outline-none"
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
        <div className="contents pt-11">
          {contentList.map((c, i) => (
            <DiscussContent
              imageUrl={c.imageUrl}
              postDescription={c.postDescription}
              postOwner={c.postOwner}
              responseCount={c.responseCount}
              key={i}
            />
          ))}
        </div>
        <button className="join bg-white text-black border-2 border-solid border-black rounded-3xl font-sans grid place-items-center m-3">
          Load more
        </button>
      </div>
      <div className="right w-1/3">
        <div className="top"></div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Discussion;
