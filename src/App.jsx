import Header from "./components/Header";
import Status from "./components/Status";
import Main from "./components/Main";
import Footer from "./components/Footer";

import "./styles/Global.css";
import "bulma/css/bulma.min.css";

export default function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
}