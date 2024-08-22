const SingleTask = (props) => {
  const tasks = props.tasks;
  const setTasks = props.setTasks;
  const completedTasks = props.completedTasks || [];
  const setCompletedTasks = props.setCompletedTasks;
  const pendingTasks = props.pendingTasks || [];
  const setPendingTasks = props.setPendingTasks;

  function handleDelete(id){
    const updatedArray = tasks.filter(task => task.id !== id)
    setTasks(updatedArray)
    setCompletedTasks(completedTasks.filter(task => task.id !== id));
    setPendingTasks(pendingTasks.filter(task => task.id !== id));
  }
  function handleStatus(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        const newStatus = task.status === 'completed' ? 'pending' : 'completed';
        const updatedTask = { ...task, status: newStatus };

        // Update completed and pending tasks based on new status
        if (newStatus === 'completed') {
          setCompletedTasks([...completedTasks, updatedTask]);
          setPendingTasks(pendingTasks.filter(task => task.id !== id));
        } else {
          setPendingTasks([...pendingTasks, updatedTask]);
          setCompletedTasks(completedTasks.filter(task => task.id !== id));
        }

        return updatedTask;
      }
      return task;
    });

    setTasks(updatedTasks);
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
