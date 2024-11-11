// Option1
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import "./CodeDisplay.scss";

// const CodeDisplay = ({ code }) => {
//   return (
//     <div className="code-display">
//       <SyntaxHighlighter language="javascript" style={docco}>
//         {code}
//       </SyntaxHighlighter>
//     </div>
//   );
// };

// export default CodeDisplay;

//Option 2

// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"; // Dark theme
// import "./CodeDisplay.scss";

// const CodeDisplay = ({ code }) => {
//   return (
//     <div className="code-display">
//       <SyntaxHighlighter
//         language="javascript"
//         style={vscDarkPlus}
//         showLineNumbers
//         customStyle={{ backgroundColor: "#000" }} // Force black background
//       >
//         {code}
//       </SyntaxHighlighter>
//     </div>
//   );
// };

// export default CodeDisplay;

// favorite!
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./CodeDisPlay.scss";

const CodeDisplay = ({ code }) => {
  return (
    <div className="code-display">
      <SyntaxHighlighter
        language="javascript"
        style={dracula}
        // showLineNumbers
        customStyle={{
          backgroundColor: "#282a36",
          fontSize: "0.6rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;
