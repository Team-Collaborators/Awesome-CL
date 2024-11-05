import { Link } from "react-router-dom";
// import styles from "./SideBar.module.css";

export function SideBar({ className = "", data, style }) {
  return (
    <ul className={className}>
      {data.map((elem) => {
        return (
          <li key={elem.title}>
            <Link
              to={`${elem.path}`}
              style={{
                textDecoration: "none",
                color: "blue",
                fontWeight: "bold",
              }}
            >
              {elem.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
