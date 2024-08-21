import { useEffect, useState } from "react";

const CreateTask = ({tasks, setTasks}) => {

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState("completed");

  function handleSubmit() {
    console.log("data received");
    const newTask = { title, details, status, id: Date.now() };

    setTasks([...tasks, newTask]);
    setTitle("");
    setDetails("");
    setStatus("pending");
  }

/*   useEffect(() => {
    console.log('useEffect ran')
    console.log(tasks);
    console.log(tasks.length)
  }, [tasks]) */

  return (
    <div className="single-task">
      <form
        className="input-container"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <input
          type="text"
          required
          id="input-title"
          placeholder="enter new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          id="input-details"
          required
          placeholder="enter task details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
        <select
          id="status"
          onChange={(e) => setStatus(e.target.value)}
          value={status}
        >
          <option value="pending">pending</option>
          <option value="completed">completed</option>
        </select>
        <button type="submit">Add task</button>
      </form>      
      
    </div>
  );
};

export default CreateTask;
