import { Link } from "react-router-dom";
// import styles from "./SideBar.module.css";

export function SideBar({ className= "", data }) {
    
  return (
    <ul className={className}>
      {data.map((elem) => {
        return (
          <li key={elem.title}>
            <Link to={`${elem.path}`}>
              {elem.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
