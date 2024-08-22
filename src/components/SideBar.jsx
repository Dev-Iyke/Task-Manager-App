import { Link } from "react-router-dom";

const SideBar = (props) => {
  const user = props.user
  
  return ( 
    <div className="sidebar">
      <h2>Quick Tabs</h2>
      <nav>
        <ul>
          <li><Link to="/">My tasks</Link></li>
          <li><Link to="/create">Create</Link></li>
        </ul>
        
      </nav>

      <div className="user">
        <h3>{user.name}</h3>
        <p>{user.role}</p>
      </div>
    </div>
  );
}
 
export default SideBar;