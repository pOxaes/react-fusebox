import {actions} from '../actions/index';

const article = (state = {}, action) => {
    switch (action.type) {
    case actions.ADD_ARTICLE:
        return {
            title: action.title,
            text: action.text,
            id: action.id
        };
    default:
        return state;
    }
};

const articles = (state = [], action) => {
    switch (action.type) {
    case actions.ADD_ARTICLE:
        return [
            ...state,
            article(undefined, action)
        ];
    case actions.REMOVE_ARTICLE:
        return state.filter(currentArticle => {
            return currentArticle.id !== action.id;
        });
    default:
        return state;
    }
};

export default articles;
