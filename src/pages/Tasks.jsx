import { Link } from "react-router-dom";
import SingleTask from "../components/SingleTask";

const Tasks = (props) => {
  const setTasks = props.setTasks
  const tasks = props.tasks
  return (
    <div>
      <h2>My Tasks</h2>
      <div>
        {(tasks.length === 0) ?
         (<h3>You do not have any task yet. <br /> click <Link to='/create'>here</Link> to add one</h3>) : 
         (<SingleTask tasks={tasks} setTasks={setTasks}/>)}
      </div>
      
    </div>
  );
};

export default Tasks;
