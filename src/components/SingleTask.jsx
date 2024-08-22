const SingleTask = (props) => {
  const tasks = props.tasks;
  const setTasks = props.setTasks;

  function handleDelete(id){
    const updatedArray = tasks.filter(task => task.id !== id)
    setTasks(updatedArray)
  }
  function handleStatus(id){
    const updatedStatus = tasks.map(task => {
      if (task.id === id){
        return {...task, 
          status: task.status === 'completed'? 'pending' : 'completed'  // Toggle status
        };
      }
      return task;   
    })    
    setTasks(updatedStatus)
  }
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
            <button onClick={() => handleStatus(task.id)}>{task.status}</button>
          </div>
          
        ))
      }
      
    </div>
  );
};

export default SingleTask;
