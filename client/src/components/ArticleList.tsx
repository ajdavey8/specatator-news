import React from 'react';
import styled from 'styled-components';
import { Article } from '../types';
import ArticleListItem from './ArticleListItem';

const Container = styled.section`
  margin: ${({ theme }) => theme.spacingM};

  ${({ theme }) => theme.mediaMedium} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: ${({ theme }) => theme.spacingXL};
  }

  ${({ theme }) => theme.mediaLarge} {
    padding-right: ${({ theme }) => theme.spacingXL};
    border-right: 0.5px solid ${({ theme }) => theme.lightGrey};
    border-image: linear-gradient(to bottom, ${({ theme }) => theme.lightGrey} 0%, ${({ theme }) => theme.lightGrey} 94%,rgba(38, 34, 34,0) 94%,rgba(38, 34, 34,0) 100%);
    border-image-slice: 1;
  }

`

interface ArticleList {
  articles: Article[]
  addBookmark: (arg1: number) => void
}

const ArticleList = ({ articles, addBookmark }: ArticleList) => (
  <Container>
    {articles?.map(article => (
      <ArticleListItem {...article} key={article.id} addBookmark={addBookmark} />
    ))}
  </Container>
)

export default ArticleList;
