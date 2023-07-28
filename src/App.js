import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import "./components/App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

// Populates a header and footer on each page in the app
const App = () => {
    return (
        <div className="App">
            <header className="App-header">  
                <Container fluid md>
                    <Card className="mb-2" style = {{ color: "#000" }}>
                        <Card.Body>
                            <Header/>
                            <PortfolioContainer />
                            <Footer/>
                        </Card.Body>
                    </Card>
                </Container>
            </header>
        </div>
    )
}

export default App;

