import React from 'react';

const Article = ({title, text, removeArticle}) => (
    <li className='article'>
        <div className="article_content">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
        <footer>
            <button type="button"
                onClick={removeArticle}>
                supprimer
            </button>
        </footer>
    </li>
);

export default Article;
