import {FETCH_MAIN_DATA,FETCH_MAIN_VO,FETCH_FOOD_LIST,FETCH_FOOD_FIND,
FETCH_FOOD_DETAIL} from "./types";
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

export const fetchFoodList=(page)=>dispatch=>{
    axios.get('http://localhost/food/list_react',{
        params:{
            page:page
        }
    }).then(response=>{
        const action={
            type:FETCH_FOOD_LIST,
            payload:response.data
        }
        // reducer로 전송
        dispatch(action)
    })
}
//[] {}=>JSON
/*
      let a={"name":"홍길동",age:20}
      a.name , a.age
      cnst list=[{},{},{},{}]
      list.map((m)=>
        <div></div>
      )
      list.map((m)=>{
        return (

        )
      })
 */
export const fetchFoodFind=(page,address)=>dispatch=>{
    axios.get('http://localhost/food/find_react',{
        params:{
            page:page,
            address:address
        }
    }).then(response=>{
        const action={
            type:FETCH_FOOD_FIND,
            payload:response.data
        }
        dispatch(action)
        // main
        /*
            Thread => start(){run()}
         */
    })
}

export const fetchFoodDetail=(fno)=>dispatch=>{
    axios.get('http://localhost/food/detail_react',{
        params:{
            fno:fno
        }
    }).then(response=>{
        const action={
            type:FETCH_FOOD_DETAIL,
            payload:response.data
        }
        dispatch(action)
    })
}
