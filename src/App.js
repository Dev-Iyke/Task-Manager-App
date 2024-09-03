import { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Tasks from "./pages/Tasks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateTask from "./pages/CreateTask";
import PendingTasks from "./pages/PendingTasks";
import CompletedTasks from "./pages/CompletedTasks";

function App() {
  const [user, setUser] = useState({ name: "Thompson", role: "dev" });
  const [tasks, setTasks] = useState(() => {
    //returns the tasks that was sent to the storage or returns an empty array if no tasks were saved before and assigns it as the initial value of tasks.
    const storedTasks = localStorage.getItem("locallyStoredTasks");
    return storedTasks ? JSON.parse(storedTasks) : []
  })

 //will send our state to local storage using the setItem. useEffect runs immediately the app component is mounted or whenever there is a change to the tasks
  useEffect(() => {
    localStorage.setItem("locallyStoredTasks", JSON.stringify(tasks))
  }, [tasks])

  return (
    <Router>
      <div className="App">
        <header>
        <h1 id="title">Task Manager App</h1>
        </header>

        <div className="content">
          <div className="sidebar-container">
            <SideBar user={user} />
          </div>
          <div className="tasks-container">
          <Routes>
            <Route exact path="/" element={<Tasks tasks={tasks} setTasks={setTasks} />} />
            <Route path="/create" element={<CreateTask tasks={tasks} setTasks={setTasks} />} />
            <Route exact path="/pending" element={<PendingTasks tasks={tasks} setTasks={setTasks} />} />
            <Route exact path="/completed" element={<CompletedTasks tasks={tasks} setTasks={setTasks} />} />
          </Routes>
          </div>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
