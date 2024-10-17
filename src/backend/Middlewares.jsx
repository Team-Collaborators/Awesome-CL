import React from "react";
import {RenderCode} from "../common/RenderCode"
import {fetchData} from "../common/Hooks"

export function Middleware() {
  const { data, loading, error } = fetchData(
    "/data/middleware/middleware.json"
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

