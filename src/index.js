import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {Provider} from "react-redux";
import {I18nReduxProvider} from "./containers/I18nReduxProvider";
import i18n from "./configuration/i18n";
import theme from './palette';
import languageReducer from "./redux/i18n";
import computerReducer from './redux/computers';
import menuIsOpenReducer from './redux/menuIsOpen';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import connectionReducer from "./redux/connection";
import {addTokenInterceptor} from "./configuration/axios";
import {selectToken} from "./redux/selectors";
import thunk from "redux-thunk";
import searchParametersReducer from './redux/searchParameters';
import addButtonReducer from './redux/addButton';
import companiesReducer, {getCompanies} from "./redux/companies";
import routerReducer from './redux/router';
import notificationReducer from './redux/notification';
import {SnackbarProvider} from "notistack";
import updateButtonReducer from './redux/updateButton';
import modeAdminActivateReducer from './redux/modeAdminIsActivate';


const computers = {computers: computerReducer};
const language = {language: languageReducer};
const connection = {connectionInfos: connectionReducer};
const menu = {isOpen: menuIsOpenReducer};
const search = {searchParameters: searchParametersReducer};
const addButton = {addButton: addButtonReducer};
const companies = {companies: companiesReducer};
const router = {router: routerReducer};
const updateButton = {updateButton: updateButtonReducer};
const admin = {adminMode: modeAdminActivateReducer};
const notification = {notifications: notificationReducer};

const reducer = combineReducers({...menu, ...language, ...computers, ...connection, ...search, ...addButton, ...companies, ...router, ...admin, ...updateButton, ...notification});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


addTokenInterceptor(() => selectToken(store.getState()));

setTimeout(() => store.dispatch(getCompanies()), 5000);

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <I18nReduxProvider i18n={i18n}>
                <SnackbarProvider maxSnack={3} preventDuplicate>
                    <App/>
                </SnackbarProvider>
            </I18nReduxProvider>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
)
;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
