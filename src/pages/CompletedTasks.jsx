import { Link } from "react-router-dom";
import SingleTask from "../components/SingleTask";

const CompletedTasks = (props) => {
  const setCompletedTasks = props.setCompletedTasks
  const completedTasks = props.completedTasks
  const tasks = props.tasks

  function filterTasks(){
    console.log("filterTasks")
    const completedTasks = tasks.filter((task) => task.status === 'completed')
    setCompletedTasks(completedTasks)
    //history.go(1)
  }

  return (
    <div className="completed">
      <button onClick={() => filterTasks()}>completed</button>
      <div>
        {completedTasks.length === 0 ? (
          <h3>
            You do not have any completed task yet. <br /> click{" "}
            <Link to="/create">here</Link> to add one
          </h3>
        ) : (
          <SingleTask tasks={completedTasks} setTasks={setCompletedTasks} />
        )}
      </div>
    </div>
  );
};

export default CompletedTasks;
