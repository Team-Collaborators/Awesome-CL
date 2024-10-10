import React from "react";
import { fetchData } from "../../components/Hooks";
// import { RenderCode } from "../../components/RenderCode";

export function Configuration() {
  const { data, loading, error } = fetchData(
    "/data/configuration/connectDB.json"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <ul>
        {data.map((element) => {
          return (
            <li key={element.title}>
              <h2>{element.title}</h2>
              <p>{element.description}</p>
              {/* <RenderCode code={element.code} language={element.language} /> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
