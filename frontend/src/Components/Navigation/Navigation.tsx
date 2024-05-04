import { Tab, Tabs } from "@mui/material"
import NavigationButton from "../NavigationButton/NavigationButton";
import { useState } from "react";
import SsidChartRoundedIcon from '@mui/icons-material/SsidChartRounded';
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import DisplaySettingsRoundedIcon from '@mui/icons-material/DisplaySettingsRounded';

const Navigation = () => {
    console.log(process.env.REACT_APP_NAVIGATION_TAB_COLOR);
    const textColor = process.env.REACT_APP_NAVIGATION_TAB_COLOR === undefined
        ? '#53B9EA'
        : `#${process.env.REACT_APP_NAVIGATION_TAB_COLOR}`;

    const [tabState, setTabState] = useState(0);
    const handleTabs = (value: number) => {
        setTabState(value);
    }

    return (
        <Tabs 
            orientation="vertical" 
            textColor="secondary"
            centered
            onChange={(event, value) => { handleTabs(value) }}
            value={tabState}
            >
            <Tab 
                icon={<PlayCircleFilledWhiteRoundedIcon color="secondary"/>}
                iconPosition="start"
                resource="/launch_simulation" 
                value={0}
                label={
                    <NavigationButton color={textColor} label="Запуск нагрузки"/>
                } />
            <Tab 
                icon={<SsidChartRoundedIcon color="secondary" />}
                iconPosition="start"
                resource="/monitoring" 
                value={1}
                label={
                    <NavigationButton color={textColor} label="Мониторинг"/>
                } />
            <Tab 
                icon={<DisplaySettingsRoundedIcon color="secondary"/>}
                iconPosition="start"
                resource="/states" 
                value={2}
                label={
                    <NavigationButton color={textColor} label="Состояния"/>
                } />
        </Tabs>
    )
}

export default Navigation;