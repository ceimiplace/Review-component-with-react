import ReactDOM from "react-dom"
import App from "./App"
import {createRoot} from "react-dom/client"
const container = document.querySelector("#root")
let counter = 1
const root = createRoot(container)

root.render(<App ></App>)


