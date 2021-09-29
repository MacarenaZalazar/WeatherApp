import { createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk'

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export const store = createStore(
    rootReducer, 
  composeEnhancers (
    applyMiddleware(thunkMiddleware),
  )
);