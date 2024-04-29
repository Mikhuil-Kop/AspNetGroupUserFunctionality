import { Tab, Tabs } from "@mui/material"
import NavigationButton from "../NavigationButton/NavigationButton";

const Navigation = () => {
    return (
        <Tabs 
            orientation="vertical" 
            textColor="secondary"
            centered
            >
            <Tab 
                resource="/launch_simulation" 
                label={
                    <NavigationButton color="#53B9EA" label="Запуск симуляции"/>
                } />
            <Tab 
                resource="/monitoring" 
                label={
                    <NavigationButton color="#53B9EA" label="Мониторинг"/>
                } />
            <Tab 
                resource="/states" 
                label={
                    <NavigationButton color="#53B9EA" label="Состояния"/>
                } />
        </Tabs>
    )
}

export default Navigation;