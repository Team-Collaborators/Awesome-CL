import React, { useState } from "react"; // Import React and useState hook
import { FaRegCopy } from "react-icons/fa6"; // Import copy icon from react-icons
import { Light as SyntaxHighlighter } from "react-syntax-highlighter"; // Import SyntaxHighlighter component
import { atelierDuneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"; // Import syntax highlighting style
import styles from "./RenderCode.module.css"; // Import CSS module styles

export function RenderCode({ data }) {
  const [copied, setCopied] = useState(false); // State to track if code is copied

  const copyToClipboard = (code) => {
    navigator.clipboard
      .writeText(code) // Copy code to clipboard
      .then(() => {
        setCopied(true); // Set copied state to true
        setTimeout(() => {
          setCopied(false); // Reset copied state after 1 second
        }, 1000);
      })
      .catch((err) => {
        console.error("Could not copy text: ", err); // Log error if copying fails
      });
  };

  return (
    <>
      <ul>
        {data.map((elem) => {
          return (
            <li key={elem.title}>
              <header>
                <h2>{elem.title}</h2>
                <p>{elem.description}</p>
              </header>
              <section>
                <div className={styles.div}>
                  <SyntaxHighlighter
                    className={styles.code}
                    language={elem.language}
                    style={atelierDuneDark}
                  >
                    {elem.code}
                  </SyntaxHighlighter>
                  <button
                    onClick={() => {
                    let code = elem.code
                      copyToClipboard(code);
                    }}
                    className={styles.button}
                  >
                    {copied ? (
                      <span className="copy-message">Copied</span>
                    ) : (
                      <FaRegCopy />
                    )}
                  </button>
                </div>
              </section>
            </li>
          );
        })}
      </ul>
    </>
  );
}