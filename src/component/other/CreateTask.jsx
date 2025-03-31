import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

function CreateTask() {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      assignTo,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = userData;

    data.forEach((elem) => {
      if (assignTo == elem.firstname) {
        elem.tasks.push(newTask);
        elem.taskCounts.newTask = elem.taskCounts + 1;
      }
    });
    setUserData(data);
    console.log(data);

    setTaskTitle("");
    setAssignTo("");
    setTaskDescription("");
    setTaskDate("");
    setCategory("");
  };

  return (
    <div className="p-5 bg-[#icicic] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex w-full bg-gray-800 items-start justify-between p-4"
      >
        <div className="w-1/2">
          <div className="bg-gray-700 text-white p-2 rounded">
            <h3 className="text-xl font-semibold">Task Title</h3>
            <input
              className="border-2 border-gray-50 w-[50%] py-1 px-2 mt-2 focus:border-gray-200"
              type="text"
              placeholder="make a ui design"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
          </div>

          <div className="bg-gray-700 text-white p-2 rounded mt-3">
            <h3 className="text-xl font-semibold">Date</h3>
            <input
              className="border-2 border-gray-50 w-[50%] py-1 px-2 mt-2 focus:border-gray-200"
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
          </div>
          <div className="bg-gray-700 text-white p-2 rounded mt-3">
            <h3 className="text-xl font-semibold">Assign To</h3>
            <input
              className="border-2 border-gray-50 w-[50%] py-1 px-2 mt-2 focus:border-gray-200"
              type="text"
              placeholder="Employee name"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
            />
          </div>
          <div className="bg-gray-700 text-white p-2 rounded mt-3">
            <h3 className="text-sm text-gray-300 mb-0.5 font-semibold">
              Cateogry
            </h3>
            <input
              className="border-2 border-gray-50 w-4/5 bg-transparent text-sm py-1 px-2 mt-2 focus:border-gray-200"
              type="text "
              placeholder="design, dev, etc."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm text-white py-2 px-4 rounded outline-none bg-transparent border-2 border-white"
            cols={30}
            rows={10}
            name=""
            id=""
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          ></textarea>

          <button className="mt-5 bg-emerald-500 py-3 hover:bg-emerald-600 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
