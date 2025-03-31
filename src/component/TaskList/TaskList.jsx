import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function TaskList({ data }) {
  return (
    <div
      id="tasklist"
      className="h-[55%] flex items-center justify-between gap-5 flex-nowrap overflow-x-auto w-full mt-10"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.NewTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.CompleteTask) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.FailedTask) {
          return <FailedTask key={idx} data={elem} />;
        }
        return null;
      })}
    </div>
  );
}

export default TaskList;
