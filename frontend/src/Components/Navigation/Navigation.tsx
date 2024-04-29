import { Tab, Tabs } from "@mui/material"
import NavigationButton from "../NavigationButton/NavigationButton";
import { useState } from "react";

const Navigation = () => {
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
                resource="/launch_simulation" 
                value={0}
                label={
                    <NavigationButton color="#53B9EA" label="Запуск симуляции"/>
                } />
            <Tab 
                resource="/monitoring" 
                value={1}
                label={
                    <NavigationButton color="#53B9EA" label="Мониторинг"/>
                } />
            <Tab 
                resource="/states" 
                value={2}
                label={
                    <NavigationButton color="#53B9EA" label="Состояния"/>
                } />
        </Tabs>
    )
}

export default Navigation;