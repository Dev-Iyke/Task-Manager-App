const SingleTask = (props) => {
  const tasks = props.tasks;
  return (
    <div>
      {tasks.length === 0 ? (
        <h3>You've not added any task yet</h3>
      ) : (
        tasks.map((task, index) => (
          <div className="task" key={index}>
            <h2>{task.title}</h2>
            <p>{task.details}</p>
            <p>{task.status}</p>
            <p>{task.id}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SingleTask;
