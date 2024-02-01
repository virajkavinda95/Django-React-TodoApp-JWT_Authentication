import React, { useState, useEffect } from "react";
import { FaRegCheckCircle, FaDotCircle, FaRegTrashAlt } from "react-icons/fa";
import useAxios from "../utils/useAxios";
import jwt_decode from "jwt-decode";

function Dashboard() {
  const baseURL = "http://127.0.0.1:8000/api";
  const api = useAxios();

  const token = localStorage.getItem("authTokens");
  const decode = jwt_decode(token);
  const user_id = decode.user_id;

  const [todo, setTodo] = useState([]);

  console.log(todo);

  useEffect(() => {
    fetchUserTodos();
  }, []);

  const fetchUserTodos = async () => {
    try {
      await api.get(baseURL + "/todo/" + user_id + "/").then((res) => {
        setTodo(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

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
            <button
              type="submit"
              className="w-25 mr-0 ml-auto text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-lg rounded-lg text-lg px-5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              <FaRegCheckCircle />
            </button>
          </form>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                colSpan={5}
                className="px-6 py-3 text-center text-lg"
              >
                My Todo List
              </th>
            </tr>
          </thead>
          <tbody>
            {todo?.map((val, idx) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {val.todo}
                </th>
                <td className="px-6 py-4">{val.date}</td>
                <td
                  className={`px-6 py-4 ${
                    val.completed == 0 ? `text-blue-500` : `text-green-500`
                  }`}
                >
                  {val.completed == 0 ? "Pending" : "Completed"}
                </td>
                <td className="px-6 py-4" colSpan={2}>
                  <td>
                    <button className="bg-orange-500 p-2 text-white rounded">
                      <FaRegCheckCircle />
                    </button>
                  </td>
                  <td>
                    <button className="bg-red-500 p-2 mx-1 text-white rounded">
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
