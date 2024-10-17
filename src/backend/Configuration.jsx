import React from "react";
import { fetchData } from "../common/Hooks";
import { RenderCode } from "../common/RenderCode";

export function Configuration() {
  const { data, loading, error } = fetchData(
    "/data/configuration/connectDB.json"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <ul>
        <li key={data.title}>
          <RenderCode data={data.controllers} />
        </li>
      </ul>
    </>
  );
}
