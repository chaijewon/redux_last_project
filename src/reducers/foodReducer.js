import {FETCH_FOOD_DETAIL, FETCH_FOOD_FIND, FETCH_FOOD_LIST, FETCH_MAIN_DATA, FETCH_MAIN_VO} from "../actions/types";
// food관련 React => useState지정된 데이터를 한곳에 모아둔다
/*
    List  => [] => map
    VO,Entity => {}
    Map => {}
 */
const foodState={
    food_main_list:[],
    food_main_vo:{},
    food_list:{},
    find_list:{},
    food_detail:{}
}
/*

 */
/*
    let arr=[1,2,3,4,5]
    let arrc=[...arr]
 */
// dispatch(action) ==> 구현
// react => useSelector((state)=> state.foods.food_main_list)
/*
    1. React (Component) => 화면 변경 확인
    2. 서버 제작 (Spring-Boot)
       => 1) JPA
       => 2) RestController
    3. types에 등록
    4. 해당 action처리 => 서버와 연결 => 데이터 읽기
    5. reducer에서 처리 => 자동 처리 (store)
    6. 데이터를 받아서 react에서 출력
 */
export default function(state=foodState,action){
    switch (action.type)
    {
        case FETCH_MAIN_DATA:
            return {
                ...state,
                food_main_list: action.payload
            }
        case FETCH_MAIN_VO:
            return {
                ...state,
                food_main_vo: action.payload
            }
        case FETCH_FOOD_LIST:
            return {
                ...state,
                food_list: action.payload
            }
        case FETCH_FOOD_FIND:
            return {
                ...state,
                find_list:action.payload
            }
        case FETCH_FOOD_DETAIL:
            return {
                ...state,
                food_detail:action.payload
            }
        default:
            return state
    }
}
