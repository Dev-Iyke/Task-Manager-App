import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/tasks.css'
import { faHourglassHalf, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faListCheck, faMarker } from '@fortawesome/free-solid-svg-icons';

const SingleTask = (props) => {
  const tasks = props.tasks;
  const setTasks = props.setTasks;

  const truncateText = (text, maxLength) => {
    const placeholder = '. ';
    let modifiedText = text.replace(/\n/g, placeholder);
    if (modifiedText.length > maxLength) {
      modifiedText = modifiedText.substring(0, maxLength);
    }
    return modifiedText
  };
  
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
    <div className='test-task'>
      { 
        tasks.map((task, index) => (
          <div className="task" key={index}>
            <div>
            <h2 id='task-title'>{task.title.length < 15 ? task.title : task.title.substring(0, 15) + '...'}</h2>
            <p id='task-details'>{truncateText(task.details, 79) + '...'}</p>
            </div>
            <div className="actions">
              <button onClick={() => handleStatusToggle(task.id)}>Mark as {task.status === "pending" ? "Completed" : "Pending"}</button>
              <FontAwesomeIcon className='del icons' onClick={() => handleDelete(task.id)} icon={faTrashCan}/>
              <p>{task.status === "pending" ? <FontAwesomeIcon className="pend icons" icon={faHourglassHalf} /> : <FontAwesomeIcon className="comp icons" icon={faCheck} />} </p>
            </div>

          </div>
          
        ))
      }
      
    </div>
  );
};

export default SingleTask;
