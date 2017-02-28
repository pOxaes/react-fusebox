import React from 'react';
import {connect} from 'react-redux';
import {addArticle} from '../actions';

let AddArticles = ({dispatch}) => {
    let textarea;
    let titleInput;

    const onSubmit = (e) => {
        e.preventDefault();
        if (!textarea.value.trim() || !titleInput.value.trim()) {
            return;
        }
        dispatch(addArticle({
            title: titleInput.value,
            text: textarea.value
        }));
        textarea.value = '';
        titleInput.value = '';
    };

    return (
        <form className="add-article" onSubmit={onSubmit}>
            <input
                placeholder='titre'
                ref={node => {
                    titleInput = node;
                }}
            />
            <textarea
                placeholder='texte'
                ref={node => {
                    textarea = node;
                }}
            />
            <button type="submit">Ajouter</button>
        </form>
    );
};

AddArticles = connect()(AddArticles);

export default AddArticles;
