const SET_LANGUAGE = "SET_LANGUAGE";

export function setLanguage(language) {
    return {type: SET_LANGUAGE, language: language};
}

export default function reducer(state = "fr", action) {
    switch (action.type) {
        case SET_LANGUAGE:
            return action.language;
        default:
            return state;
    }
}