import {FETCHING_TASK,
    FETCH_TASK_SUCCESS,
    FETCH_TASK_FAIL,
SELECTED_ITEM_TASK} from './MainActionTypes';
import {URL} from '../../utils/Constant';
import {connect} from 'redux';
import TaskList from '../../components/Home/TaskList';
/*Click one title item*/ 
function fetchTaskLists(){
    return (dispatch)=>{
        dispatch(fetchingTaskList())
        return (
            fetch("https://api.myjson.com/bins/1e9eyu")
            .then(response=> 
                // console.log(response)
                response.json()
            )
            .then(responseJson=>
                // console.log(responseJson);
                 dispatch(fetchTaskSuccess(responseJson))
            )
            .catch(error=>
                 dispatch(fetchTaskFail(error))
            )
        )
    } 
}
export function doFetchTasks(){
    return (dispatch)=>{
        return dispatch(fetchTaskLists());
    }
}
export function fetchingTaskList(){
    return {
        type:  FETCHING_TASK
    }
}
export function fetchTaskSuccess(taskList){
    console.log("success",taskList);
    return{
        type: FETCH_TASK_SUCCESS,
        taskList
    }
}
export function fetchTaskFail(err){
    return{
        type: FETCH_TASK_FAIL,
        err
    }
}
/**
 * This exportation used for the selectation item in the list and expands
 * nested items,.
 */
export const selectedIdItem=(id)=>{
    return {
        type: SELECTED_ITEM_TASK,
        id
    }
}