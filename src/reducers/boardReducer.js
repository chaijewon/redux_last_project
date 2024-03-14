import {BOARD_LIST,BOARD_INSERT} from "../actions/types";
const boardState={
    board_list:{},
    result:''
}

export default function(state=boardState,action){
    switch (action.type)
    {
        case BOARD_LIST:
            return {
                ...state,
                board_list: action.payload
            }
        case BOARD_INSERT:
            return {
                ...state,
                result:action.payload
            }
        default:
          return state
    }
}