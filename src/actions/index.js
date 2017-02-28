export const actions = {
    ADD_ARTICLE: 'ADD_ARTICLE',
    REMOVE_ARTICLE: 'REMOVE_ARTICLE'
};

export const addArticle = (article) => {
    return {
        title: article.title,
        text: article.text,
        type: actions.ADD_ARTICLE,
        id: Math.random().toString(35).substr(2, 7)
    };
};

export const removeArticle = (id) => {
    return {
        type: actions.REMOVE_ARTICLE,
        id: id
    };
};
