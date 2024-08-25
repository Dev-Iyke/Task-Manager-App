import { Link } from "react-router-dom";
import SingleTask from "../components/SingleTask";

const Tasks = ({setTasks, tasks}) => {
  //TODO: Remember to add a route that goes to the filtered pages(pending and completed) if you decide to add a filter section for them on the tasks page too
  return (
    <div>
      <h2>My Tasks</h2>
      <div>
        {(tasks.length === 0) ?
         (<h3>You do not have any task yet. <br /> click <Link to='/create'>here</Link> to add one</h3>) : 
         (<SingleTask tasks={tasks} setTasks={setTasks} />)}
      </div>
      
    </div>
  );
};

export default Tasks;
