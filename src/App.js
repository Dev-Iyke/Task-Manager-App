import { useEffect, useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Tasks from "./pages/Tasks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateTask from "./pages/CreateTask";
import PendingTasks from "./pages/PendingTasks";
import CompletedTasks from "./pages/CompletedTasks";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [user, setUser] = useState({ name: "Personal", role: "Manager" });
  const [tasks, setTasks] = useState(() => {
    //returns the tasks that was sent to the storage or returns an empty array if no tasks were saved before and assigns it as the initial value of tasks.
    const storedTasks = localStorage.getItem("locallyStoredTasks");
    return storedTasks ? JSON.parse(storedTasks) : []
  })

 //will send our state to local storage using the setItem. useEffect runs immediately the app component is mounted or whenever there is a change to the tasks
  useEffect(() => {
    localStorage.setItem("locallyStoredTasks", JSON.stringify(tasks))
  }, [tasks])

  function openMenu(){
    const sidebar = document.querySelector('.sidebar-container')
    sidebar.classList.toggle('toggle-menu')

    const links = document.querySelectorAll('.sidebar-container a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        sidebar.classList.remove('toggle-menu');
      });
  });
  }
  return (
    <Router>
      <div className="App">
        <header>
        <h1 id="title">My Task Manager</h1>
        <FontAwesomeIcon onClick={() => openMenu()} className="menu" icon={faBars} />
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
