import { useState } from "react";

function App() {

  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const analyze = async () => {

    const res = await fetch("http://localhost:5000/api/journal/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    });

    const data = await res.json();

    setResult(data);
  };

  return (
    <div style={{ padding: 40 }}>

      <h2>AI Journal Analyzer</h2>

      <textarea
        rows="5"
        cols="50"
        placeholder="Write your journal entry..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br /><br />

      <button onClick={analyze}>
        Analyze Emotion
      </button>

      {result && (
        <div style={{ marginTop: 30 }}>

          <h3>Emotion: {result.emotion}</h3>

          <p><b>Summary:</b> {result.summary}</p>

          <p>
            <b>Keywords:</b> {result.keywords.join(", ")}
          </p>

        </div>
      )}

    </div>
  );
}

export default App;