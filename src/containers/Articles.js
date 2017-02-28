import React from 'react';
import {connect} from 'react-redux';
import {removeArticle} from '../actions';
import Article from '../components/Article';

let Articles = ({articles, onRemoveClick}) => {
    return (
        <ul className="articles">
            {articles.map(article =>
                <Article key={article.id}
                    {...article}
                    removeArticle={() => onRemoveClick(article.id)}
                />
            )}
        </ul>
    );
};

const mapStateToProps = (state) => {
    return {
        articles: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveClick: (id) => {
            dispatch(removeArticle(id));
        }
    };
};

Articles = connect(
    mapStateToProps,
    mapDispatchToProps
)(Articles);

export default Articles;
