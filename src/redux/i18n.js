const SET_LANGUAGE = "SET_LANGUAGE";

export function setLanguage(language) {
    return {type: SET_LANGUAGE, language: language};
}

export default function reducer(state = "fr", action) {
    if (action === action.type) {
        return action.language;
    }
    return state;
}