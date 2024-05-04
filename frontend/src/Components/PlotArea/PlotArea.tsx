import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./PlotArea.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../..";
import { plotTypeActions } from "../../Redux/plotType/plotTypeActions";
import { plotTypes } from "../../Redux/plotType/plotTypeConstants";
import CustomPlot from "../CustomPlot/CustomPlot";

const textColor = process.env.REACT_APP_SELECT_PLOT_SWITCH_COLOR === undefined
        ? '#B1AFCD'
        : `#${process.env.REACT_APP_SELECT_PLOT_SWITCH_COLOR}`;

const defaultSx = {
    color: textColor,
    "&.MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: textColor,
        },
        "&:hover fieldset": {
          borderColor: "#53B9EA"
        },
      }
};

// ToDo: поменять, когда определимся с типами графиков
const plotValue_plotName = new Map([
    [0, plotTypes.choose],
    [1, plotTypes.f],
    [2, plotTypes.g],
    [3, plotTypes.h]
]);

const PlotArea = () => {
    const [dependancy, setDependancy] = useState<number>(0);

    const dispatch = useAppDispatch();
    let plotType = useAppSelector(state => state.plotType);

    const changePlotType = () => {
        dispatch({ 
            type: plotTypeActions.CHANGE,
            payload: { 
                newPlotType: plotValue_plotName.get(dependancy)
            } 
        });
    }

    const handleChange = (value: number) => {
        setDependancy(value);
    }

    // Т.к. useState асинхронный, этот хук нужен, чтобы глобальный
    // стейт устанавливался точно после срабатывания setDependancy()
    useEffect(() => {
        changePlotType();
    }, [dependancy]);


    return (
        <div className="wrapper">
            <div className="select__holder">
            <FormControl fullWidth>
                <InputLabel 
                    id="demo-simple-select-label" 
                    sx={defaultSx}
                >
                    Тип зависимости
                </InputLabel>
                <Select
                    value={dependancy}
                    label="Тип зависимости"
                    sx={defaultSx}
                    onChange={(event) => { handleChange(event.target.value as number); }}
                >
                    <MenuItem value={0}>Выберете тип зависимости</MenuItem>
                    <MenuItem value={1}>f(x)</MenuItem>
                    <MenuItem value={2}>g(x)</MenuItem>
                    <MenuItem value={3}>h(x)</MenuItem>
                </Select>
            </FormControl>
            </div>

            <div className="plot__holder">
                <CustomPlot />
            </div>
        </div>
    );
}

export default PlotArea;