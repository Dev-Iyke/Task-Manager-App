import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/create.css'

const CreateTask = ({tasks, setTasks}) => {

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState("pending");
  const navigate = useNavigate()

  function handleSubmit() {
    console.log("data received");
    const newTask = { title, details, status, id: Number(Date.now().toString().slice((-4))) };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDetails("");
    setStatus("pending");
    navigate("/")
  }

  return (
    <div className="single-task">
      <form
        className="input-container"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div>
          <label>Task Title: </label>
          <input
            type="text"
            required
            id="input-title"
            placeholder="enter new task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Task Details: </label>
          <textarea
            id="input-details"
            required
            placeholder="enter task details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Task Status: </label>
          <select
            id="status"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <option value="pending">pending</option>
            <option value="completed">completed</option>
          </select>
        </div>       
        <button type="submit">Add task</button>
      </form>      
      
    </div>
  );
};

export default CreateTask;
