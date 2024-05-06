import Avatar from "@mui/material/Avatar";
import PlotArea from "../PlotArea/PlotArea";
import { route } from "../../Redux/route/routeConstants";
import { State } from "../../Redux/route/routeReducer";
import Stack from "@mui/material/Stack";

import "./Content.css"
import Tooltip from "@mui/material/Tooltip";
import kopotovM from "../../Images/Avatars/kopotov_m.jpg";
import klimkovA from "../../Images/Avatars/klimkov_a.jpg";
import volkovS from "../../Images/Avatars/volkov_s.jpg";
import ivanchevY from "../../Images/Avatars/ivanchev_y.jpg";
import tikhomirovS from "../../Images/Avatars/tikhomirov_s.jpg";
import gerasimenkoA from "../../Images/Avatars/gerasimenko_a.jpg";

interface ContentProps{
    currRoute: State
}

const authors = [
    {
        name: "Михаил Копотов",
        src: kopotovM,
        href: "https://t.me/kopotovmike"
    },
    {
        name: "Антон Климков",
        src: klimkovA,
        href: "https://t.me/mipt_collapse"
    },
    {
        name: "Александр Марков",
        src: "https://t.me/av_markov89",
        href: null
    },
    {
        name: "Сергей Волков",
        src: volkovS,
        href: "https://t.me/volk_ink"
    },
    {
        name: "Юрий Иванчев",
        src: ivanchevY,
        href: "https://t.me/yuriiwanchev"
    },
    {
        name: "Сергей Тихомиров",
        src: tikhomirovS,
        href: "https://t.me/sltikhomirov"
    },
    {
        name: "Антон Герасименко",
        src: gerasimenkoA,
        href: "https://t.me/aa_gerasimenko"
    }
]

const Content = (props: ContentProps) => {
    let {currRoute} = props;
    
    switch (currRoute.route){
        case route.home:
            return (
                <div className="home__page">
                    <span className="intro">
                        Проект группы курса <br />
                        <a href="https://otus.ru/lessons/asp-net/" style={{color: 'inherit'}}>OTUS C# ASP.NET Core разработчик</a>
                    </span>
                    <Stack direction="row" spacing={{ xs: 1, sm: 2 }} useFlexGap flexWrap="wrap">
                        {authors.map((person) => {
                            if (person.name !== "Александр Марков"){
                                return (
                                    <a href={person.href ?? ""} key={person.name}>
                                        <Tooltip title={person.name}>
                                            <Avatar alt={person.name} src={person.src as string} sx={{ width: 128, height: 128 }}/>
                                        </Tooltip>
                                    </a>    
                                );
                            } else {
                                return (
                                    <a href={person.href ?? ""} key={person.name}>
                                        <Tooltip title={person.name}>
                                            <Avatar alt={person.name} sx={{ width: 128, height: 128 }}>АМ</Avatar>
                                        </Tooltip>
                                    </a> 
                                );
                            }
                            
                        })}
                    </Stack>
                </div>
            )
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