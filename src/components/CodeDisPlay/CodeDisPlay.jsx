import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dracula,
  atomDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import "./CodeDisPlay.scss";

const customLightTheme = {
  'pre[class*="language-"]': {
    background: "#f8f9fa",
    fontSize: "1rem",
    borderRadius: "10px",
    overflow: "auto",
  },
  'code[class*="language-"]': {
    color: "#42A5F5",
    background: "transparent",
  },
};

const THEME_STYLES = {
  default: customLightTheme,
  "dark-theme": dracula,
  "neon-theme": atomDark,
};

const CodeDisplay = ({ theme }) => {
  const codeSnippets = {
    default: `
    import { ProductCard } from "AwesomeCL";

    function App() {
      return (
        <ProductCard theme="default" />
      );
    };`,
    "dark-theme": `
    import { ProductCard } from "AwesomeCL";

    function App() {
      return (
        <ProductCard theme="dark-theme" />
      );
    };`,
    "neon-theme": `
    import { ProductCard } from "AwesomeCL";

    function App() {
      return (
        <ProductCard theme="neon-theme" />
      );
    };`,
  };

  const highlightStyle = THEME_STYLES[theme] || THEME_STYLES.default;

  return (
    <div className={`code-display ${theme}`}>
      <SyntaxHighlighter
        language="javascript"
        style={highlightStyle}
        customStyle={{
          padding: "0",
          height: "100%",
          background: "transparent",
        }}
      >
        {codeSnippets[theme]}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;
