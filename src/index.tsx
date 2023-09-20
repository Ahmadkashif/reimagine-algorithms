import * as ReactDOM from "react-dom";
import App from "./App";

// @ts-expect-error: can't find createRoot because types are not available for beta  build
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
