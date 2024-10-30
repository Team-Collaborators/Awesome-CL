import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar2 from "../Sidebar2/Sidebar2";
import Footer from "../Footer/Footer";


const Layout = ({ children, isDarkMode, toggleTheme }) => {
  const sidebarLinks = ["Components", "Hooks"]
  return (
    <div className="app-container">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      {/* <Sidebar2 /> */}
      <main className="content-wrapper">{children}</main>
      <Footer />
    </div>
  );
};



// const Layout = ({ children, isDarkMode, toggleTheme }) => {
//   return (
//     <div className="app-container">
//       <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
//       <div className="content-wrapper">{children}</div>
//       <Footer />
//     </div>
//   );
// };

export default Layout;
