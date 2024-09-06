import { Link } from "react-router-dom";
import '../styles/navbar.css'
import { faCalendarPlus, faHourglassHalf, faListCheck, faListUl, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons";
const SideBar = (props) => {
  const user = props.user
  
  return ( 
    <div className="sidebar">
      <h2>Quick Tabs</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <div>
              <FontAwesomeIcon className="icons" icon={faListUl} />
              <p>My Tasks</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/create">
              <div>
              <FontAwesomeIcon className="icons" icon={faCalendarPlus} />
              <p>Create</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/pending">
              <div>
              <FontAwesomeIcon className="icons" icon={faHourglassHalf} />
              <p>Pending</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="/completed">
              <div>
              <FontAwesomeIcon className="icons" icon={faListCheck} />
              <p>Completed</p>
              </div>
            </Link>
          </li>
        </ul>       
      </nav>

      <div className="user">
        <h3><FontAwesomeIcon className="icons" icon={faUser} /> {user.name}</h3>
        <p><FontAwesomeIcon className="icons" icon={faLocationDot} /> {user.role}</p>
      </div>
    </div>
  );
}
 
export default SideBar;