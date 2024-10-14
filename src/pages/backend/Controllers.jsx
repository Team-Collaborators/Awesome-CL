import React from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import { fetchData } from "../../components/Hooks";
import { SideBar } from "../../components/SideBar";
import {Controller} from "../../components/Controller"

export function Controllers() {
  const { data, loading, error } = fetchData(
    "/data/controllers/controllers.json"
  );
  const location = useLocation();
  console.log(location.pathname);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <>
      <SideBar data={data} path={"/backend/controllers"}/>
      <Routes>
        <Route path="/" element={<Controller data={data} />} />
        <Route path="/:name" element={<Controller data={data} />} />
      </Routes>
    </>
  );
}
