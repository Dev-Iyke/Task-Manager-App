import { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Tasks from "./pages/Tasks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateTask from "./pages/CreateTask";

function App() {
  const [user, setUser] = useState({ name: "Thompson", role: "dev" });
  const [tasks, setTasks] = useState([])
  return (
    <Router>
      <div className="App">
        <h1>Task Manager App</h1>

        <div className="content">
          <div className="sidebar-container">
            <SideBar user={user} />
          </div>
          <Routes>
            <Route exact path="/" element={<Tasks tasks={tasks}/>} />
            <Route path="/create" element={<CreateTask tasks={tasks} setTasks={setTasks}/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
