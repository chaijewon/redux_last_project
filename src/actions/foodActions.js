import {FETCH_MAIN_DATA,FETCH_MAIN_VO} from "./types";
import axios from "axios";
import reducers from "../reducers";
/*
                    dispatch()            dispatch()
                                          action => type,data
    사용자 UI(View)  ========= action호출  ========= reducer ========= store
    React(디자인)                                                       |
                                                                     React
 */

export const fetchMainData=()=>dispatch=>{
    axios.get('http://localhost/').then(response=>{
        const action={
            type:FETCH_MAIN_DATA,
            payload:response.data
        }
        // reducer를 호출
        dispatch(action)
    })
}
export const fetchMainVO=()=>dispatch=>{
    axios.get('http://localhost/main').then(response=>{
        const action={
            type:FETCH_MAIN_VO,
            payload: response.data
        }
        dispatch(action)
    })
}
