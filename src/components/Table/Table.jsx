import React from "react";
import "./Table.scss"

export default  function Table({ headers, rows }) {
  return (
    <div className="table_container">
      <table className="table">
        <thead>
          <tr>
            {headers ?  headers.map((header) => (
              <th key={header} className="table_header">
                {header}
              </th>
            )) : null}
           
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.propName ? <td key={row.propName} className="table_cell">{row.propName}</td> : null}
              {row.type ? <td key={row.type} className="table_cell">{row.type}</td> : null}
              {row.description ? <td key={row.description} className="table_cell">{row.description}</td> : null}
              {row.defaultValue ? <td key={row.defaultValue} className="table_cell">{row.defaultValue}</td> : null}              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


