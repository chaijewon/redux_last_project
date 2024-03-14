import {BOARD_LIST,BOARD_INSERT} from "./types";
import axios from "axios";

export const boardList=(page)=>dispatch=>{
    axios.get('http://localhost/board/list_react',{
        params:{
            page:page
        }
    }).then(response=>{
        const action={
            type:BOARD_LIST,
            payload:response.data
        }
        dispatch(action)
    })
}

export const boardInsert=(insertData)=>dispatch=>{
    axios.post('http://localhost/board/insert_react',null,{
        params:insertData
    }).then(response=>{
        const action={
            type:BOARD_INSERT,
            payload: response.data
        }
        dispatch(action)
    })
}