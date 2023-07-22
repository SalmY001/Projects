import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import "./components/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

// Populates a header and footer on each page in the app
const App = () => {
    return (
        <div className="App">
            <Header/>
            <PortfolioContainer />
            <Footer/>
        </div>
    )
}

export default App;

