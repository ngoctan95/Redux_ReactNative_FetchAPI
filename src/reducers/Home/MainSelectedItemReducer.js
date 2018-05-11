import {SELECTED_ITEM_TASK} from '../../actions/Home/MainActionTypes';
export default (state=null,action)=>{
    //console.log("mainnn",action);
    switch(action.type){
        
        case SELECTED_ITEM_TASK:{
            //console.log("mainnn",action);
            if(state === action.id){
                return null;
            }
            
            return action.id;
        }
        default:{
            return state;
        }
    }
    return null;
}