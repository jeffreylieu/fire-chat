import { combineReducers } from 'redux';
import chat from './chat_reducer';

export default combineReducers({ chat });


//import chatReducer from './chat_reducer';
//
// const rootReducer = combineReducers({
//     chat: chat_reducer
// });
//
// export default rootReducer;
