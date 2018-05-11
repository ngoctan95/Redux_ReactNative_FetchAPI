import {combineReducers} from 'redux';
import MainReducer from './Home/MainReducer';
import MainSelecedItemReducer from './Home/MainSelectedItemReducer';
export default combineReducers({
    mainReducer: MainReducer,
    mainSelectedItemIdReducer:MainSelecedItemReducer
})