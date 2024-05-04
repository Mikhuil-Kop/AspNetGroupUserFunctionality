import './App.css';
import Navigation from "../Navigation/Navigation";
import { useAppSelector } from '../..';
import Content from '../../Content/Content';

const logo = require('../../Images/logo.png')

const App = () => {
    let selectedRoute = useAppSelector(state => state.route);

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
                
                <Content currRoute={selectedRoute} />
                
            </div>

        </div>
    );
}

export default App;
