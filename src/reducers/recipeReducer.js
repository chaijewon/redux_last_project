import {RECIPE_MAIN_LIST} from "../actions/types";

const recipeState={
    recipe_main_list:[]
}

export default function(state=recipeState,action){
    switch (action.type)
    {
        case RECIPE_MAIN_LIST:
            return {
                ...state,
                recipe_main_list: action.payload
            }
        default:
            return state
    }
}