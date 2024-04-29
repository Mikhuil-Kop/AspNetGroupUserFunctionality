import './App.css'
import Navigation from "../Navigation/Navigation";

import logo from "../../Images/logo.svg"

const App = () => {
    return (
        <div className="app">
            <div className="left__column">
                <div className="credentials">
                    <img src={logo} alt="logo" />
                </div>

                <div className="navigation">
                    <Navigation />
                </div>
            </div>

            <div className="right__column">
                <div className="tab__name">
                    Tab name
                </div>

                <div className="plot__area">
                    Plot area
                </div>
            </div>

        </div>
    );
}

export default App;