import {RECIPE_MAIN_LIST} from "./types";
import axios from "axios";
export const fetchRecipeMainList=()=>dispatch=>{
    axios.get('http://localhost/recipe/main').then(response=>{
        const action={
            type:RECIPE_MAIN_LIST,
            payload:response.data
        }
        dispatch(action)
    })
}