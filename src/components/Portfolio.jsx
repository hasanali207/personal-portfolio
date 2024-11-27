import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import portfolio1 from '../assets/img/port1.png';
import portfolio2 from '../assets/img/port2.png';
import portfolio3 from '../assets/img/port3.png';

const Portfolio = () => {
  return (
    <div className="bg-[#0a192f]">
      <div className="flex flex-col justify-center items-center pb-10">
        <h1 className="text-[45px] leading-tight font-bold gradient-text py-4 ">
          My Recent Works
        </h1>
        <p className="text-[#ddd] font-light text-center">
          We put your ideas and thus your wishes in the form of a unique web
          project that <br /> inspires you and you customers.
        </p>
      </div>
      <div className=" max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 lg:p-0">
        {/* portfolio 1  */}
        <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full">
          <img
            src={portfolio1}
            alt="listing cover"
            className="w-full object-cover hover:scale-105 transition-scale duration-300"
          />
          <div className="p-3 flex flex-col gap-2 w-full">
            <p className="truncate text-lg font-semibold text-slate-700">
              Scholar Management System
            </p>

            <p className="text-sm text-gray-600">
              Description: Scholarship Management System where student can
              search there suitable university and Scholarship also they can
              apply for the scholarship through our Scholarship Management
              System. In our website will be 3 type of user one is by default
              user and another one is admin and another one is moderator.
            </p>

            <details className="w-full border rounded-lg" open="">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 cursor-pointer">
                Features
              </summary>
              <ul className="px-4 py-6 pt-0 ml-4 -mt-4 list-decimal dark:text-gray-600">
                <li>User login, register, and logout </li>
                <li>User role-based access</li>
                <li>Teacher panel </li>
                <li>Admin panel</li>
                <li>Payment system </li>
                <li>Pagination functionality </li>
                <li> Feedback system</li>
              </ul>
            </details>

            <details
              className=" cursor-pointer w-full border rounded-lg"
              open=""
            >
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                Techs I used
              </summary>
              <div className="flex flex-wrap space-x-2 px-2">
                <a className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                  <span className="rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                    {' '}
                    React
                  </span>
                </a>
                <a className="tl-duration bg-gray-200 rounded-full px-3 py-2 text-sm uppercase font-medium inline-block mb-4">
                  Javascript
                </a>
                <a className="tl-duration bg-gray-200 rounded-full px-3 py-2 text-sm uppercase font-medium inline-block mb-4">
                  Node.js
                </a>
                <a className="tl-duration bg-gray-200 rounded-full px-3 py-2 text-sm uppercase font-medium inline-block mb-4">
                  Express.js
                </a>
                <a className="tl-duration bg-gray-200 rounded-full px-3 py-2 text-sm uppercase font-medium inline-block mb-4">
                  Mongodb
                </a>
                <a className="tl-duration bg-gray-200 rounded-full px-3 py-2 text-sm uppercase font-medium inline-block mb-4">
                  Firebase
                </a>
              </div>
            </details>

            <div className="text-slate-700 flex gap-4">
              <div className="font-bold text-xs">
                {/* Add any additional information here */}
              </div>
              <div className="text-slate-700 flex gap-4">
                <div className="font-bold flex space-x-4">
                  <a
                    target="_blank"
                    className=" border rounded-lg p-2 bg-slate-200 flex items-center space-x-3"
                    href="https://scholar-stream.web.app/"
                  >
                    <button>Live </button>
                    <FaGlobe></FaGlobe>
                  </a>
                  <a
                    className=" border rounded-lg p-2 bg-slate-200 flex items-center space-x-3"
                    href="https://github.com/hasanali207/scholar-stream"
                  >
                    <button>Client </button>
                    <FaGithub></FaGithub>
                  </a>
                  <a
                    className=" border rounded-lg p-2 bg-slate-200 flex items-center space-x-3"
                    href=""
                  >
                    <button>Server </button>
                    <FaGithub></FaGithub>
                  </a>
                </div>
                <div className="font-bold text-xs"></div>
              </div>
            </div>
          </div>
        </div>
        {/* portfolio 2  */}
        <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full">
          <img
            src={portfolio2}
            alt="listing cover"
            className="w-full object-cover hover:scale-105 transition-scale duration-300"
          />
          <div className="p-3 flex flex-col gap-2 w-full">
            <p className="truncate text-lg font-semibold text-slate-700">
              Library Management System
            </p>

            <p className="text-sm text-gray-600">
              Description: This website that allows Librarian to add books of
              diffrent categories to their collection, and update book
              information. Bokks can be borrowed ro returend. The system keeps
              track it.
            </p>

            <details className="w-full border rounded-lg" open="">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 cursor-pointer">
                Features
              </summary>
              <ul className="px-4 py-6 pt-0 ml-4 -mt-4 list-decimal dark:text-gray-600">
                <li>User login, register, and logout </li>
                <li>User role-based access</li>
                <li>Librarian panel </li>
                <li>User panel</li>
                <li>Pagination functionality </li>
                <li> Feedback system</li>
              </ul>
            </details>

            <details
              className=" cursor-pointer w-full border rounded-lg"
              open=""
            >
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                Techs I used
              </summary>
              <div className="flex flex-wrap space-x-2 px-2">
                <p className="tl-duration bg-gray-200 rounded-full px-3 py-2 text-sm uppercase font-medium inline-block mb-4">
                  React
                </p>
                <p className="tl-duration bg-gray-200 rounded-full px-3 py-2 text-sm uppercase font-medium inline-block mb-4">
                  Javascript
                </p>
                <p className="tl-duration bg-gray-200 rounded-full px-3 py-2 text-sm uppercase font-medium inline-block mb-4">
                  Node.js
                </p>
                <p className="tl-duration bg-gray-200 rounded-full px-3 py-2 text-sm uppercase font-medium inline-block mb-4">
                  Express.js
                </p>
                <p className="tl-duration bg-gray-200 rounded-full px-3 py-2 text-sm uppercase font-medium inline-block mb-4">
                  Mongodb
                </p>
                <p className="tl-duration bg-gray-200 rounded-full px-3 py-2 text-sm uppercase font-medium inline-block mb-4">
                  Firebase
                </p>
              </div>
            </details>

            <div className="text-slate-700 flex gap-4">
              <div className="font-bold text-xs">
                {/* Add any additional information here */}
              </div>
              <div className="text-slate-700 flex gap-4">
                <div className="font-bold flex space-x-4">
                  <a
                    target="_blank"
                    className=" border rounded-lg p-2 bg-slate-200 flex items-center space-x-3"
                    href="https://book-haven-six.vercel.app/"
                  >
                    <button>Live </button>
                    <FaGlobe></FaGlobe>
                  </a>
                  <a
                    className=" border rounded-lg p-2 bg-slate-200 flex items-center space-x-3"
                    href="https://github.com/hasanali207/book-library"
                  >
                    <button>Client </button>
                    <FaGithub></FaGithub>
                  </a>
                  <a
                    className=" border rounded-lg p-2 bg-slate-200 flex items-center space-x-3"
                    href=""
                  >
                    <button>Server </button>
                    <FaGithub></FaGithub>
                  </a>
                </div>
                <div className="font-bold text-xs"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full">
          <img
            src={portfolio3}
            alt="listing cover"
            className="w-full object-cover hover:scale-105 transition-scale duration-300"
          />
          <div className="p-3 flex flex-col gap-2 w-full">
            <p className="truncate text-lg font-semibold text-slate-700">
              Art & Craft Store
            </p>

            <p className="text-sm text-gray-600">
              Description: Art & Craft Store with a backend API using Node.js
              and Express and a frontend using React. The React app fetches the
              store description from the backend and displays it on the page.
              This example can be expanded with additional features such as
              product listings, user authentication, and more complex UI
              elements to create a fully functional store.
            </p>

            <details className="w-full border rounded-lg" open="">
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600 cursor-pointer">
                Features
              </summary>
              <ul className="px-4 py-6 pt-0 ml-4 -mt-4 list-decimal dark:text-gray-600">
                <li>User login, register, and logout </li>
                <li>User role-based access</li>
                <li>Admin panel </li>
                <li>User panel</li>
                <li>Pagination functionality </li>
                <li> Feedback system</li>
              </ul>
            </details>

            <details
              className=" cursor-pointer w-full border rounded-lg"
              open=""
            >
              <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
                Techs I used
              </summary>
              <div className="flex flex-wrap space-x-2 px-2">
                <p className="tl-duration bg-gray-200 rounded-full px-3 py-2 text-sm uppercase font-medium inline-block mb-4">
                  React
                </p>
                <p className="tl-duration bg-gray-200 rounded-full px-3 py-2 text-sm uppercase font-medium inline-block mb-4">
                  Javascript
                </p>
                <p className="tl-duration bg-gray-200 rounded-full px-3 py-2 text-sm uppercase font-medium inline-block mb-4">
                  Node.js
                </p>
                <p className="tl-duration bg-gray-200 rounded-full px-3 py-2 text-sm uppercase font-medium inline-block mb-4">
                  Express.js
                </p>
                <p className="tl-duration bg-gray-200 rounded-full px-3 py-2 text-sm uppercase font-medium inline-block mb-4">
                  Mongodb
                </p>
                <p className="tl-duration bg-gray-200 rounded-full px-3 py-2 text-sm uppercase font-medium inline-block mb-4">
                  Firebase
                </p>
              </div>
            </details>

            <div className="text-slate-700 flex gap-4">
              <div className="font-bold text-xs">
                {/* Add any additional information here */}
              </div>
              <div className="text-slate-700 flex gap-4">
                <div className="font-bold flex space-x-4">
                  <a
                    target="_blank"
                    className=" border rounded-lg p-2 bg-slate-200 flex items-center space-x-3"
                    href="https://artisan-avenue-fe34e.web.app/"
                  >
                    <button>Live </button>
                    <FaGlobe></FaGlobe>
                  </a>
                  <a
                    className=" border rounded-lg p-2 bg-slate-200 flex items-center space-x-3"
                    href="https://github.com/hasanali207/Artisan-Avenue"
                  >
                    <button>Client </button>
                    <FaGithub></FaGithub>
                  </a>
                  <a
                    className=" border rounded-lg p-2 bg-slate-200 flex items-center space-x-3"
                    href=""
                  >
                    <button>Server </button>
                    <FaGithub></FaGithub>
                  </a>
                </div>
                <div className="font-bold text-xs"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
