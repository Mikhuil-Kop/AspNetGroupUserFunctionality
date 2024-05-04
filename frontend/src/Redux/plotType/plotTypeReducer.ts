import { plotTypeActions } from "./plotTypeActions"
import { plotTypes } from "./plotTypeConstants"

export type State = {
    plotType: string
}

export type Action = {
    type: string,
    payload?: any
}

export const initState: State = {
    plotType: plotTypes.choose
};

export default (state: State = initState, action: Action): any => {
    switch (action.type){
        case plotTypeActions.CHANGE:
            if (!action.payload)
                return { ...state};
            else{
                if (action.payload?.newPlotType)
                    return { plotType: action.payload.newPlotType };
                else
                    return { ...state};
            }
        default:
            return { ...state };
    }
}
