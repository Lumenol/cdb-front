import React, {Suspense} from "react";
import {I18nextProvider} from "react-i18next";
import {connect} from "react-redux";
import {selectLanguage} from "../redux/selectors";
import PropTypes from 'prop-types';

function I18nProvider(props) {
    const {i18n, language, children} = props;
    i18n.changeLanguage(language);
    return (
        <I18nextProvider i18n={i18n}>
            <Suspense fallback={""}>
                {children}
            </Suspense>
        </I18nextProvider>
    );
}

I18nProvider.propTypes = {
    i18n: PropTypes.object.isRequired,
    language: PropTypes.string.isRequired
};

function mapStateToProps(state) {
    return {language: selectLanguage(state)};
}

export const I18nReduxProvider = connect(mapStateToProps)(I18nProvider);
