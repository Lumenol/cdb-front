import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import searchComputerReducer from './redux/computerSearch';
import orderByComputerReducer from './redux/computerOrderBy';
import directionComputerReducer from './redux/computerDirection';
import menuIsOpenReducer from './redux/menuIsOpen';


const searchReducer = {
    orderBy: orderByComputerReducer,
    search: searchComputerReducer,
    direction: directionComputerReducer,
    menuIsOpen: menuIsOpenReducer,
};

const reducer = combineReducers({...searchReducer});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
