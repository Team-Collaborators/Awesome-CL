import React, { useEffect, useState } from "react";
// import { Route, Routes } from "react-router-dom";
import { fetchData } from "../../../hooks/hooks";
//import { SideBar } from "../../SideBar/Sidebar";
import { MainBackendLayout } from "../../MainBackendLayout/MainBackendLayout";
import { MainFrontendLayout } from "../../MainFrontendLayout/MainFrontendLayout";
import { MainInstructionsLayout } from "../../MainInstructionsLayout/MainInstructionsLayout";

export function RenderPages({ file }) {
  const { data, loading, error } = fetchData(`/data/${file}.json`);
  const [pageType, setPageType] = useState(null);
  // const [were, setWere] = useState(true);

  // let path = file.split("/");

  // useEffect(() => {
  //   if (path.length > 0 && path[0] === "backend") {
  //     setWere(true);
  //   } else {
  //     setWere(false);
  //   }
  // }, [file]);

  useEffect(() => {
    const path = file.split("/");
    if (path[0] === "backend") {
      setPageType("backend");
    } else if (path[0] === "frontend") {
      setPageType("frontend");
    } else if (path[0] === "instructions") {
      setPageType("instructions");
    }
  }, [file]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  // Ensure that rendering doesn't occur before data is loaded
  if (!data || data.length === 0) return <p>No data available</p>;

  let LayoutComponent;
  switch (pageType) {
    case "backend":
      LayoutComponent = MainBackendLayout;
      break;
    case "frontend":
      LayoutComponent = MainFrontendLayout;
      break;
    case "instructions":
      LayoutComponent = MainInstructionsLayout;
      break;
    default:
      return <p>Unknown page type</p>;
  }

  return <LayoutComponent data={data} />;
    // <>
      {/* <SideBar data={data} /> */}
      {/* <Routes>
        <Route
          path="/"
          element={
            were ? (
              <MainBackendLayout data={data} />
            ) : (
              <MainFrontendLayout data={data} />
            )
          }
        />
        <Route
          path="/:name"
          element={
            were ? (
              <MainBackendLayout data={data} />
            ) : (
              <MainFrontendLayout data={data} />
            )
          }
        />
      </Routes> */}
      {/* <Footer /> */}
    // </>
  // );
}
