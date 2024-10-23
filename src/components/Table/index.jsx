import React from 'react';
import styles from './Table.module.css';

export function Table({data}) {
 

  return (
    <div className={styles.table_container}>
      <table className={styles.table}>
        <thead>
          <tr>
            {data.columns.map((header, index) => (
              <th key={index} className={styles.table_header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
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
