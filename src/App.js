import { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Tasks from "./pages/Tasks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateTask from "./pages/CreateTask";
import PendingTasks from "./pages/PendingTasks";
import CompletedTasks from "./pages/CompletedTasks";

function App() {
  const [user, setUser] = useState({ name: "Thompson", role: "dev" });
  const [tasks, setTasks] = useState([])
  const [pendingTasks, setPendingTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])

  return (
    <Router>
      <div className="App">
        <h1>Task Manager App</h1>

        <div className="content">
          <div className="sidebar-container">
            <SideBar user={user} />
          </div>
          <Routes>
            <Route exact path="/" element={<Tasks tasks={tasks} setTasks={setTasks} pendingTasks={pendingTasks} setPendingTasks={setPendingTasks} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks}/>} />
            <Route path="/create" element={<CreateTask tasks={tasks} setTasks={setTasks} pendingTasks={pendingTasks} setPendingTasks={setPendingTasks} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks}/>} />
            <Route exact path="/pending" element={<PendingTasks tasks={tasks} pendingTasks={pendingTasks} setPendingTasks={setPendingTasks}/>} />
            <Route exact path="/completed" element={<CompletedTasks tasks={tasks} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
