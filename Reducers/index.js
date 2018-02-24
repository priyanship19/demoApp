import {combineReducers} from 'redux';
import getCatReducer from './getCategoryReducer';
import registerReducer from './registerReducer';

const AppReducer = combineReducers({

    getCategory : getCatReducer,
    register : registerReducer
});

export default AppReducer;