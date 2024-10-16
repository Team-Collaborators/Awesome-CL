import { Link } from "react-router-dom";
// import styles from "./SideBar.module.css";

export function SideBar({ data, path }) {
    console.log(data);
    
  return (
    <ul>
      {data.map((elem) => {
        return (
          <li key={elem.title}>
            <Link to={`${path}/${elem.title}`}>
              {elem.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
