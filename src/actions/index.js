const ACTIONS = {
    ADD_TODO: 'ADD_TODO',
    SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
    TOGGLE_TODO: 'TOGGLE_TODO'
};

let nextTodoId = 0;

export const addTodo = (text) => {
    return {
        type: ACTIONS.ADD_TODO,
        id: nextTodoId++,
        text
    };
};

export const setVisibilityFilter = (filter) => {
    return {
        type: ACTIONS.SET_VISIBILITY_FILTER,
        filter
    };
};

export const toggleTodo = (id) => {
    return {
        type: ACTIONS.TOGGLE_TODO,
        id
    };
};

export const actions = ACTIONS;
