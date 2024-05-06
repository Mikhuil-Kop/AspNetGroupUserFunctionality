import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import NavigationButton from "../NavigationButton/NavigationButton";
import {
    MemoryRouter,
    Route,
    Routes,
    Link,
    matchPath,
    useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import SsidChartRoundedIcon from '@mui/icons-material/SsidChartRounded';
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import DisplaySettingsRoundedIcon from '@mui/icons-material/DisplaySettingsRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { useEffect, useState } from "react";
import { route } from '../../Redux/route/routeConstants';
import { useAppDispatch, useAppSelector } from '../..';
import { routeActions } from '../../Redux/route/routeActions';

const routes = route;

const useRouteMatch = (patterns: readonly string[]) => {
    const { pathname } = useLocation();

    for (let pattern in patterns) {
        const possibleMatch = matchPath(pattern, pathname);
        if (possibleMatch !== null) {
        return possibleMatch;
        }
    }

    return null;
}

const Router = (props: { children?: React.ReactNode }) => {
    const { children } = props;
    if (typeof window === 'undefined') {
        return <StaticRouter location={routes.home}>{children}</StaticRouter>;
    }

    return (
        <MemoryRouter initialEntries={[routes.home]} initialIndex={0}>
            {children}
        </MemoryRouter>
    );
}

const CurrentRoute = () => {
    const location = useLocation();
  
    return (
      <Typography variant="body2" sx={{ pb: 2 }} color="text.secondary">
      </Typography>
    );
  }

const CustomTabs = () => {
    const routeMatch = useRouteMatch([routes.home, routes.launchSimulation, routes.monitoring, routes.states]);

    const textColor = process.env.REACT_APP_NAVIGATION_TAB_COLOR === undefined
        ? '#53B9EA'
        : `#${process.env.REACT_APP_NAVIGATION_TAB_COLOR}`;

    const [tabState, setTabState] = useState(routes.home);

    const handleTabs = (value: string) => {
        setTabState(value);
    }

    const dispatch = useAppDispatch();
    let route = useAppSelector(state => state.route);

    const changeRoute = (selectedRoute: string) => {
        dispatch({ 
            type: routeActions.CHANGE,
            payload: { 
                newRoute: selectedRoute
            } 
        });
    }

    let location = useLocation();

    useEffect(() => {
        changeRoute(location.pathname);
        setTabState(location.pathname);
    }, [location.pathname])
  
    return (
        <Tabs 
            orientation="vertical" 
            textColor="secondary"
            centered
            onChange={(event, value) => { handleTabs(value) }}
            value={tabState}
            >
            <Tab 
                icon={<HomeRoundedIcon color="secondary"/>}
                iconPosition="start"
                value={routes.home}
                label={
                    <NavigationButton color={textColor} label="Домашняя страница"/>
                }
                to={routes.home}
                component={Link}
            />
            <Tab 
                icon={<PlayCircleFilledWhiteRoundedIcon color="secondary"/>}
                iconPosition="start"
                value={routes.launchSimulation}
                label={
                    <NavigationButton color={textColor} label="Запуск нагрузки"/>
                }
                to={routes.launchSimulation}
                component={Link}
                />
            <Tab 
                icon={<SsidChartRoundedIcon color="secondary" />}
                iconPosition="start"
                value={routes.monitoring}
                label={
                    <NavigationButton color={textColor} label="Мониторинг"/>
                } 
                to={routes.monitoring}
                component={Link} 
                />
            <Tab 
                icon={<DisplaySettingsRoundedIcon color="secondary"/>}
                iconPosition="start"
                value={routes.states}
                label={
                    <NavigationButton color={textColor} label="Состояния"/>
                }
                to={routes.states}
                component={Link} 
                />
        </Tabs>
    );
}

const Navigation = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<CurrentRoute />} />
                <Route path={routes.home} element={<CurrentRoute />} />
                <Route path={routes.launchSimulation} element={<CurrentRoute />} />
                <Route path={routes.monitoring} element={<CurrentRoute />} />
                <Route path={routes.states} element={<CurrentRoute />} />
            </Routes>
            <Box>
                <CustomTabs />
            </Box>
        </Router>
    )
}

export default Navigation;