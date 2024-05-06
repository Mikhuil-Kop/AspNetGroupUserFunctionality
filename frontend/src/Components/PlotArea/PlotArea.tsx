import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./PlotArea.css";
import { useAppDispatch, useAppSelector } from "../..";
import { plotTypeActions } from "../../Redux/plotType/plotTypeActions";
import { plotTypes } from "../../Redux/plotType/plotTypeConstants";
import CustomPlot from "../CustomPlot/CustomPlot";
import { State } from "../../Redux/plotType/plotTypeReducer";

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

const PlotArea = () => {
    const dispatch = useAppDispatch();
    let state: State = useAppSelector(state => state.plotType);

    const changePlotType = (type: string) => {
        dispatch({ 
            type: plotTypeActions.CHANGE,
            payload: { 
                newPlotType: type
            } 
        });
    }

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
                    value={state.plotType}
                    label="Тип зависимости"
                    sx={defaultSx}
                    onChange={(event) => { changePlotType(event.target.value) }}
                >
                    <MenuItem value={plotTypes.choose}>Выберете тип зависимости</MenuItem>
                    <MenuItem value={plotTypes.f}>f(x)</MenuItem>
                    <MenuItem value={plotTypes.g}>g(x)</MenuItem>
                    <MenuItem value={plotTypes.h}>h(x)</MenuItem>
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