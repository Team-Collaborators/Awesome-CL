import React, { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import { fetchData } from "../../hooks";
import { SideBar } from "../../components/SideBar";
import { RenderFiles } from "../RenderFiles/index";
import { RenderComponent } from "../RenderComponent/index";

export function RenderPages({ file }) {
  const { data, loading, error } = fetchData(`/data/${file}.json`);

  const [were, setWere] = useState(true);

  let path = file.split("/");

  useEffect(() => {
    if (path.length > 0 && path[0] === "backend") {
      setWere(true);
    } else {
      setWere(false);
    }
  }, [file]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  // Ensure that rendering doesn't occur before data is loaded
  if (!data || data.length === 0) return <p>No data available</p>;
  return (
    <>
      <SideBar data={data} />
      <Routes>
        <Route
          path="/"
          element={
            were ? <RenderFiles data={data} /> : <RenderComponent data={data} />
          }
        />
        <Route
          path="/:name"
          element={
            were ? <RenderFiles data={data} /> : <RenderComponent data={data} />
          }
        />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
