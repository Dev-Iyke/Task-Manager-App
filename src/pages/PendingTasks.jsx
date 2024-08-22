import { Link } from "react-router-dom";
import SingleTask from "../components/SingleTask";

const PendingTasks = (props) => {
  const setPendingTasks = props.setPendingTasks
  const pendingTasks = props.pendingTasks
  const tasks = props.tasks

  function filterTasks(){
    console.log("filterTasks")
    const pendingTasks = tasks.filter((task) => task.status === 'pending')
    setPendingTasks(pendingTasks)
    //history.go(1)
  }

  return (
    <div className="pending">
      <button onClick={() => filterTasks()}>pending</button>
      <div>
        {pendingTasks.length === 0 ? (
          <h3>
            You do not have any pending task yet. <br /> click{" "}
            <Link to="/create">here</Link> to add one
          </h3>
        ) : (
          <SingleTask tasks={pendingTasks} setTasks={setPendingTasks} />
        )}
      </div>
    </div>
  );
};

export default PendingTasks;
