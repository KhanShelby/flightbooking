import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Import thunk middleware directly
import rootReducer from './component/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

