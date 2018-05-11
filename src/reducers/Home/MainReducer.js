import {FETCHING_TASK, 
    FETCH_TASK_SUCCESS,
    FETCH_TASK_FAIL,
    SELECTED_ITEM_TASK} from '../../actions/Home/MainActionTypes';
const initialStates={
    isFetching : false,
    taskList : [],
    err : ''
}
const mainReducer =(state=(initialStates),action)=>{
    switch (action.type){
        case FETCHING_TASK:{
            return{
                ...state,
                isFetching: true
            } 
        }
        case FETCH_TASK_SUCCESS:{
            return {
                ...state,
                isFetching:false,
                taskList:action.taskList
            }
        }
        case FETCH_TASK_FAIL:{
            return{
                ...state,
                isFetching:false,
                err:action.err
            }
        }
        default: {
            return state
        }
    }
}
export default mainReducer;