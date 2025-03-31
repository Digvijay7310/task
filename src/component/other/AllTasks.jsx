import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTasks() {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#icicic] p-5 rounded mt-5 h-60">
      <div
        className="bg-gray-600 mb-2 flex justify-between rounded"
        key={userData.id}
      >
        <h2 className="w-1/5 bg-gray-700 flex justify-center p-2">
          Employee Name
        </h2>
        <h3 className="w-1/5 bg-gray-700 flex justify-center p-2">New Task</h3>
        <h5 className="w-1/5 bg-gray-700 flex justify-center p-2">
          Active Task
        </h5>
        <h5 className="w-1/5 bg-gray-700 flex justify-center p-2">
          Complete Task
        </h5>
        <h5 className="w-1/5 bg-gray-700 flex justify-center p-2">
          Failed Task
        </h5>
      </div>
      <div id="alltasks" className="h-[80%] overflow-auto">
        {userData.map((elem) => {
          return (
            <div
              className="bg-gray-600 mb-2 py-2 px-4 flex justify-between rounded"
              key={elem.id}
            >
              <h2 className="w-1/5 bg-gray-700 flex justify-center p-2">
                {elem.firstname}
              </h2>
              <h3 className="w-1/5 bg-gray-700 flex justify-center p-2">
                {elem.taskCounts.newTask}
              </h3>
              <h5 className="w-1/5 bg-gray-700 flex justify-center p-2">
                {elem.taskCounts.active}
              </h5>
              <h5 className="w-1/5 bg-gray-700 flex justify-center p-2">
                {elem.taskCounts.completed}
              </h5>
              <h5 className="w-1/5 bg-gray-700 flex justify-center p-2">
                {elem.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTasks;
