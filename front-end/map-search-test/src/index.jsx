import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';
console.log("hello");
// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(<App />);
