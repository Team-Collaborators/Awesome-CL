import React from "react";
import { fetchData } from "../../components/Hooks";
import { RenderCode } from "../../components/RenderCode";

export function Configuration() {
  const { data, loading, error } = fetchData(
    "/data/configuration/connectDB.json"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(data);

  return (
    <div>
      <ul>
        <li key={data.title}>
          <RenderCode data={data} />
        </li>
      </ul>
    </div>
  );
}
