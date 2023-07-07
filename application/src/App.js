import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
//import logo from './components/logo.svg';
import "./components/App.css";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="App">
             <PortfolioContainer />
             <Footer/>
        </div>
    )
}

export default App;

// //function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

