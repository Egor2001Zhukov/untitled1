import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div id="app-wrapper">
                <div id={"navbar-wrapper"}>
                    <Navbar/>
                </div>
                <div id={"content-wrapper"}>
                    <Content/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
