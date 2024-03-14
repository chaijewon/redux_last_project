import {RECIPE_MAIN_LIST,FETCH_RECIPE_LIST,FETCH_CHEF_LIST,
    FETCH_RECIPE_DETAIL,FETCH_RECIPE_CHEF} from "./types";
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

export const fetchChefList=(page)=>dispatch=>{
    axios.get('http://localhost/chef/list_react',{
        params:{
            page:page
        }
    }).then(response=>{
        const action={
            type:FETCH_CHEF_LIST,
            payload:response.data
        }
        // reducer로 전송
        dispatch(action)
    })
}

export const fetchRecipeDetailData=(no)=>dispatch=>{
    axios.get('http://localhost/recipe/detail_react',{
        params:{
            no:no
        }
    }).then(response=>{
        const action={
            type:FETCH_RECIPE_DETAIL,
            payload:response.data
        }
        dispatch(action)
    })
}

export const fetchRecipeChef=(page,chef)=>dispatch=>{
    axios.get('http://localhost/recipe/chef_recipe_react',{
        params:{
            page:page,
            chef:chef
        }
    }).then(response=>{
        const action={
            type:FETCH_RECIPE_CHEF,
            payload:response.data
        }
        // reducer로 전송
        dispatch(action)
    })
}