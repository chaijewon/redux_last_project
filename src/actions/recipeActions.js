import {RECIPE_MAIN_LIST,FETCH_RECIPE_LIST} from "./types";
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

export const fetchRecipeList=(page)=>dispatch=>{
    axios.get('http://localhost/recipe/list_react',{
        params:{
            page:page
        }
    }).then(response=>{
        const action={
            type:FETCH_RECIPE_LIST,
            payload: response.data
        }
        dispatch(action)
    })
}