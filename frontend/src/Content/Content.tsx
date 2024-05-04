import PlotArea from "../Components/PlotArea/PlotArea";
import { route } from "../Redux/route/routeConstants";
import { State } from "../Redux/route/routeReducer";

interface ContentProps{
    currRoute: State
}

const Content = (props: ContentProps) => {
    let {currRoute} = props;
    
    switch (currRoute.route){
        case route.launchSimulation:
            return (
                <div className="launch__simulation"></div>
            )
        case route.monitoring:
            return (
                <div className="plot__area">
                    <PlotArea />
                </div>
            );
        case route.states:
            return (
                <div className="states"></div>
            );
        default:
            return (
                <div className="empty"></div>
            );
    }
}

export default Content;