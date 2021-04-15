import React from 'react';
import styled,{css} from 'styled-components';
import {NavLink} from 'react-router-dom';

const categories = [
    {
        name: 'all',
        text: '記事一覧'
    },
    {
        name: 'business',
        text: 'ビジネス'
    },
    {
        name: 'entertainment',
        text: 'エンターテインメント'
    },
    {
        name: 'health',
        text: 'ヘルス'
    },
    {
        name: 'science',
        text: '科学'
    },
    {
        name: 'sports',
        text: 'スポーツ'
    },
    {
        name: 'technology',
        text: '技術'
    },
    
];

const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px){
        width: 100%;
        overflow-x: auto;
    }
`;

const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #495057;
    }

    &.active {
        font-weight : 600;
        border-bottom : 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    }

    &+& {
        margin-left: 1rem;
    }
`;

const Categories = ({onSelect, category}) => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category 
                key={c.name}
                activeClassName="active"
                exact={c.name === 'all'}
                to={c.name === 'all' ? '/' : `/${c.name}`}
                >{c.text}</Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;