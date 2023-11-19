import { useState } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";

function App() {
    const [msg, setMsg] = useState("");
    const [json, setJson] = useState({});
    const [code, setCode] = useState("");

    const jsData = (data) => {
        setCode(data);

        if (data) {
            try {
                setJson(JSON.parse(data));
                setMsg("success");
            } catch (error) {
                setMsg("error");
                // Handle invalid JSON input
                console.error("Invalid JSON input: ", error);
            }
        }
    };

    console.log(json);

    return (
        <main className="container">
            <div className="container__content">
                <h1>JSON data editor</h1>

                <p>{msg}</p>
                <div className="container_editor_area">
                    <Editor
                        placeholder="Type some code…"
                        value={code}
                        onValueChange={(code) => jsData(code)}
                        highlight={(code) =>
                            highlight(code, languages.js, "js")
                        }
                        padding={10}
                        className="container__editor"
                    />
                </div>
            </div>
        </main>
    );
}

export default App;
