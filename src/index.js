import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {I18nReduxProvider} from "./containers/I18nReduxProvider";
import i18n from "./configuration/i18n";
import languageReducer from "./redux/i18n";

const language = {language: languageReducer};

const reducer = combineReducers({...language});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
    <Provider store={store}>
        <I18nReduxProvider i18n={i18n}>
            <App/>
        </I18nReduxProvider>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
