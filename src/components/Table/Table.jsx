import React from "react";
import styles from "./Table.module.css";

export default  function Table({ headers, rows }) {
  return (
    <div className={styles.table_container}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className={styles.table_header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td key={row.propName} className={styles.table_cell}>{row.propName}</td>
              <td key={row.type} className={styles.table_cell}>{row.type}</td>
              <td key={row.description} className={styles.table_cell}>{row.description}</td>
              <td key={row.defaultValue} className={styles.table_cell}>{row.defaultValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


