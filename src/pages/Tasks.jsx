import SingleTask from "../components/SingleTask";

const Tasks = ({ tasks }) => {
  return (
    <div>
      <h2>My Tasks</h2>
      <SingleTask tasks={tasks} />
    </div>
  );
};

export default Tasks;
