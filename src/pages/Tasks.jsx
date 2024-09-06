import { Link } from "react-router-dom";
import SingleTask from "../components/SingleTask";
//import '../styles/tasks.css';
const Tasks = ({setTasks, tasks}) => {
  //TODO: Remember to add a route that goes to the filtered pages(pending and completed) if you decide to add a filter section for them on the tasks page too
  return (
    <div className="all-tasks">
      <h2>My Tasks</h2>
      <div className="task-display">
        {(tasks.length === 0) ?
         (<p className="no-tasks">You do not have any task yet. <br /> click <Link to='/create'>here</Link> to add one</p>) : 
         (<SingleTask tasks={tasks} setTasks={setTasks} />)}
      </div>
      
    </div>
  );
};

export default Tasks;
