import styles from "./Table.module.scss";

export default function Table() {
  const headers = ["Header 1", "Header 2", "Header 3", "Header 4", "Header 5"];
  const rows = [
    ["Row 1 Col 1", "Row 1 Col 2", "Row 1 Col 3", "Row 1 Col 4", "Row 1 Col 5"],
    ["Row 2 Col 1", "Row 2 Col 2", "Row 2 Col 3", "Row 2 Col 4", "Row 2 Col 5"],
    ["Row 3 Col 1", "Row 3 Col 2", "Row 3 Col 3", "Row 3 Col 4", "Row 3 Col 5"],
    ["Row 4 Col 1", "Row 4 Col 2", "Row 4 Col 3", "Row 4 Col 4", "Row 4 Col 5"],
  ];
  return (
    <div className={styles.table_container}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers
              ? headers.map((header) => (
                  <th key={header} className={styles.table_header}>
                    {header}
                  </th>
                ))
              : null}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
            {row.map((cell, index) => (
              <td key={index} className={styles.table_cell}>{cell}</td>
            ))}
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
