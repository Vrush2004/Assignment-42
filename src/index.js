import { createRoot } from "react-dom/client";
import Navbar from "./navbar";
import History from "./History";
import "./index.css"

const root = createRoot(document.getElementById("root"));

root.render(
    <>
        <Navbar/>
        <History/>
    </>
)