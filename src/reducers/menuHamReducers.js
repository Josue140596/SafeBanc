import { types } from "../types/types";

const initialState = {
    menuHamOpen:false
}

export const menuHamReducers = (state = initialState, action) => {
    switch (action.type) {

        case types.OpenMenuHam:
            return {
                ...state,
                menuHamOpen: true
            }

        case types.CloseMenuHam:
            return {
                ...state,
                menuHamOpen: false
            }

        default:
            return state
    }
}
