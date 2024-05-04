import './App.css'
import Navigation from "../Navigation/Navigation";
import PlotArea from "../PlotArea/PlotArea"

const logo = require('../../Images/logo.png')

const App = () => {
    return (
        <div className="app">
            <div className="left__column">
                <div className="credentials">
                    <img src={logo} className='logo'/>
                </div>

                <div className="navigation">
                    <Navigation />
                </div>
            </div>

            <div className="right__column">
                <div className="tab__name">
                    какая-то инфа по работе счетчиков
                </div>

                <div className="plot__area">
                    <PlotArea />
                </div>
            </div>

        </div>
    );
}

export default App;