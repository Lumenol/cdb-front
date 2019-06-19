import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {I18nReduxProvider} from "./containers/I18nReduxProvider";
import i18n from "./configuration/i18n";
import theme from './palette';
import languageReducer from "./redux/i18n";
import computerReducer from './redux/computers';
import searchComputerReducer from './redux/computerSearch';
import orderByComputerReducer from './redux/computerOrderBy';
import directionComputerReducer from './redux/computerDirection';
import menuIsOpenReducer from './redux/menuIsOpen';
import ThemeProvider from "@material-ui/styles/ThemeProvider";


const computer = {selectedComputers: computerReducer};
const language = {language: languageReducer};

const searchReducer = {
    orderBy: orderByComputerReducer,
    search: searchComputerReducer,
    direction: directionComputerReducer,
    isOpen: menuIsOpenReducer,
};

const reducer = combineReducers({...searchReducer, ...language, ...computer});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <I18nReduxProvider i18n={i18n}>
                <App/>
            </I18nReduxProvider>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
