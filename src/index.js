import ReactDOM from "react-dom/client";
import "./style.css";
import Background from "./Background";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  //Calling the main component canvas
  <>
    <Background />
  </>
);
