import React from "react";

import { Route, Routes } from "react-router-dom";
import { fetchData } from "../../common/Hooks";
import { SideBar } from "../../common/SideBar";
import { RenderController } from "../../common/RenderController";

export function Controller() {
  const { data, loading, error } = fetchData(
    "/data/controllers/controllers.json"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <SideBar data={data} />
      <Routes>
        <Route path="/" element={<RenderController data={data} />} />
        <Route path="/:name" element={<RenderController data={data} />} />
      </Routes>
    </>
  );
}
