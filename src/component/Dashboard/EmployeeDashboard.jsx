import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard(props) {
  return (
    <div className="p-10 bg-[#icicic] h-screen">
      <Header change={props.changeUser} data={props.data} />
      <TaskListNumber data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
}

export default EmployeeDashboard;
