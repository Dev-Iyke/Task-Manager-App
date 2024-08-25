import { Link } from "react-router-dom";
import SingleTask from "../components/SingleTask";

const CompletedTasks = (props) => {
  const tasks = props.tasks
  const setTasks = props.setTasks
  const completedTasks = tasks.filter(task => task.status === 'completed')

  return (
    <div className="completed">
      <button>completed</button>
      <div>
        {completedTasks.length === 0 ? (
          <h3>
            You do not have any completed task yet. <br /> click{" "}
            <Link to="/create">here</Link> to add one
          </h3>
        ) : (
          <SingleTask tasks={completedTasks} setTasks={setTasks} />
        )}
      </div>
    </div>
  );
};

export default CompletedTasks;
