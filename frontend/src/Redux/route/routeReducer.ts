import { routeActions } from "./routeActions"
import { route } from "./routeConstants"

export type State = {
    route: string
}

export type Action = {
    type: string,
    payload?: any
}

export const initState: State = {
    route: route.launchSimulation
};

export default (state: State = initState, action: Action): any => {
    switch (action.type){
        case routeActions.CHANGE:
            if (!action.payload)
                return { ...state};
            else{
                if (action.payload?.newRoute)
                    return { route: action.payload.newRoute };
                else
                    return { ...state};
            }
        default:
            return { ...state };
    }
}
