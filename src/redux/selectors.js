export const getPageSelectorState = state => ({
    step: state.PageReducer.step ,
    minStep: state.PageReducer.minStep ,
    midStep : state.PageReducer.midStep,
    maxStep: state.PageReducer.maxStep,
    page: state.PageReducer.page,
    minPage: state.PageReducer.minPage ,
    maxPage: state.PageReducer.maxPage ,
});
