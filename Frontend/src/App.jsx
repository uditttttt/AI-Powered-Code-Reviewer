import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import "./App.css";

// --- CHANGE 1: Get the base URL from the environment variable ---
// This variable will be different for local development vs. production.
const API_BASE_URL = import.meta.env.VITE_API_URL;

function App() {
  const [count, setCount] = useState(0);
  const [code, setCode] = useState(` function sum() {
  return 1 + 1
}`);

  const [review, setReview] = useState(``);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    // --- CHANGE 2: Use the environment variable to build the full URL ---
    // The `${API_BASE_URL}/get-review` syntax combines the base URL with the specific endpoint.
    const response = await axios.post(`${API_BASE_URL}/get-review`, {
      code,
    });
    setReview(response.data);
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">
            Review
          </div>
        </div>
        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  );
}

export default App;