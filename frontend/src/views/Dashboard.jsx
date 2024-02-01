import React from "react";
import { FaRegCheckCircle, FaDotCircle } from "react-icons/fa";

function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center px-6 mt-5">
      <div className="w-full bg-white rounded-lg dark:border xl:mt-0 md:max-w-xl xl:p-0 dark:bg-gray-800 dark:bg-border-700">
        <div className="p-6 space-y-4 md:space-y-6 s:p-8">
          <h4 className="text-md font-bold leading-tight tracking-tight text-gray-900 md:text-lg dark:text-white">
            Create new todo here
          </h4>

          <form className="space-7-4 md:space-y-6 flex flex-row">
            <div className="w-full mr-2">
              <label
                htmlFor="todo"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                New Todo
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placehoder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="todo"
                id="todo"
                required
                placeholder="Type your new todo here"
              />
            </div>
            <button className="w-25 mr-0 ml-auto text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-lg rounded-lg text-lg px-5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
              <FaRegCheckCircle />
            </button>
          </form>
        </div>
      </div>

      <div className="p-2 flex w-1/2 bg-gray-800 text-white">
        <div className="w-full flex flex-row justify-between bg-gray-700">
          <div className=" py-5 px-2">
            <div className="flex flex-row">
              <span className="text-white mr-5 mt-1">
                <FaDotCircle />
              </span>
              <h4 className="text-white">This is my todo</h4>
            </div>
            <p className="text-gray text-sm my-2">Created at:</p>
          </div>

          <div className=" py-5 px-2">
            <h4 className="text-white bg-orange-700 px-2 py-2 text-center">
              Pending
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
