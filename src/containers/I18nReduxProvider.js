import React from "react";
import {I18nextProvider} from "react-i18next";
import {connect} from "react-redux";
import {selectLanguage} from "../redux/selectors";
import PropTypes from 'prop-types';

function I18nProvider(props) {
    const {i18n, language, children} = props;
    i18n.changeLanguage(language);
    return (
        <I18nextProvider i18n={i18n}>
            {children}
        </I18nextProvider>
    );
}

I18nextProvider.propTypes = {
    i18n: PropTypes.object.object.isRequired,
    language: PropTypes.string.isRequired,
    children: PropTypes.element
};

function mapStateToProps(state) {
    selectLanguage(state);
}

export default I18nProvider = connect(mapStateToProps)(I18nextProvider);