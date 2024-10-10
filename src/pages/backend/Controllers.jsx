// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { fetchData } from "../../components/Hooks";
// import { SideBar } from "../../components/SideBar";

// export function Controllers() {
//   const { name } = useParams();
//   const [component, setComponent] = useState([]);
//   const { data, loading, error } = fetchData(
//     "/data/controllers/controllers.json"
//   );
//   console.log(data);


//   useEffect(() => {
//     if (data) {
//       const foundComponent = data.find((comp) => comp.name === name);
//       setComponent(foundComponent);
//     }
//   }, [name, data]);

//   if (!component) return <p>todo bien</p>;
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <>
//       <SideBar array={data} />
//       <Routes>
//         <Route path="/" element={<RenderCode data={data} />} />
//         <Route path="/:name" element={<RenderCode data={data} />} />
//       </Routes>
//     </>
//   );
// }
