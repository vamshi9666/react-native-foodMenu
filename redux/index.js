import { createStore , applyMiddleware} from 'redux'
import promise from "redux-promise-middleware";
import thunk from "redux-thunk"
import { createLogger } from 'redux-logger'
import rootReducer from './reducers/app'


const middleware = applyMiddleware(  promise(),  thunk,  createLogger() );

export default createStore(rootReducer, middleware);