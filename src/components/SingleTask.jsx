const SingleTask = (props) => {
  const tasks = props.tasks;
  const setTasks = props.setTasks;


  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  
  const handleStatusToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "pending" ? "completed" : "pending" }
          : task
      )
    );
  };

  
  return (
    <div>
      { 
        tasks.map((task, index) => (
          <div className="task" key={index}>
            <h2>{task.title}</h2>
            <p>{task.details}</p>
            {/* <p>{task.status}</p> */}
            <p>{task.id}</p>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
            <button onClick={() => handleStatusToggle(task.id)}>Mark as {task.status === "pending" ? "Completed" : "Pending"}</button>
          </div>
          
        ))
      }
      
    </div>
  );
};

export default SingleTask;
