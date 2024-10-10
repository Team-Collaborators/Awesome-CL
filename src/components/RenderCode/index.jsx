// import React from "react";
// import { FaRegCopy } from "react-icons/fa6";
// import { useState } from "react";
// import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
// import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import styles from "./RenderCode.module.css";

// export function RenderCode({ data }) {
//   const [copied, setCopied] = useState(false);
//   console.log(data);

//   const copyToClipboard = () => {
//     navigator.clipboard
//       .writeText(code)
//       .then(() => {
//         setCopied(true);
//         setTimeout(() => {
//           setCopied(false);
//         }, 1000);
//       })
//       .catch((err) => {
//         console.error("Could not copy text: ", err);
//       });
//   };
//   return (
//     <section>
//       <div>
//         <ul>
//           {data.map((element) => {
//             return (
//               <li key={element.title}>
//                 <h2>{element.title}</h2>
//                 <p>{element.description}</p>
//                 <div className={styles.div}>
//                   <button onClick={copyToClipboard} className={styles.button}>
//                     {copied ? (
//                       <span className="copy-message">Copied</span>
//                     ) : (
//                       <FaRegCopy />
//                     )}
//                   </button>
//                   <SyntaxHighlighter
//                     className={styles.code}
//                     language={element.language}
//                     style={atelierDuneDark}
//                   >
//                     {element.code}
//                   </SyntaxHighlighter>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </section>
//   );
// }
