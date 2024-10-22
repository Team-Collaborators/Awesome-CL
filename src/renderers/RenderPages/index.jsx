import React from "react";

import { Route, Routes } from "react-router-dom";
import { fetchData } from "../Hooks";
import { SideBar } from "../../components/SideBar";
import { RenderFiles } from "../RenderFiles";

export function RenderPages({ file }) {
  const { data, loading, error } = fetchData(`/data/${file}.json`);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  

  return (
    <>
      <SideBar data={data} />
      <Routes>
        <Route path="/" element={<RenderFiles data={data} />} />
        <Route path="/:name" element={<RenderFiles data={data} />} />
      </Routes>
      {/* <Footer /> */} 
    </>
  );
}
