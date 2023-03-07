import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import bucketsReducer from './reducers/bucketsReducer';
import cardReducer from './reducers/cardReducer';
// import historyReducer from './reducers/historyReducer';

const rootReducer = combineReducers({
  buckets: bucketsReducer,
  cards: cardReducer,
//   history: historyReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
