import React from 'react';
import styled from 'styled-components';
import { Article } from '../types';
import BookmarkListItem from './BookmarkListItem';

const Container = styled.section`
  padding-left: ${({ theme }) => theme.spacingM};
  padding-bottom: ${({ theme }) => theme.spacingXL};
  border-bottom: 0.5px solid ${({ theme }) => theme.lightGrey};

  ${({ theme }) => theme.mediaLarge} {
    border-bottom: none;
  }
`

const BoldLine = styled.hr`
  border: 1px solid ${({ theme }) => theme.primaryRed};
`

const ThinLine = styled.hr`
  border: 0.5px solid ${({ theme }) => theme.secondaryRed};
`

const BookmarkContainer = styled.div<{
  numberOfArticles: number;
}>`
  display: grid;
  grid-gap: 10px;
  grid-template-columns:
    10px
    repeat(
      calc(${props => props.numberOfArticles} + 1), 1fr)
    10px;
  grid-template-rows: 1fr;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;

  &:before, &:after {
    content: "";
  }

  ::-webkit-scrollbar {
    display: none;
  }

  ${({ theme }) => theme.mediaLarge} {
    grid-template-columns: 260px;
    grid-template-rows:
    8px
    repeat(
      calc(${props => props.numberOfArticles} + 1), 1fr)
    8px; 
  }
`

const Header = styled.div`
  margin-top: ${({ theme }) => theme.spacingS};
  padding-right: ${({ theme }) => theme.spacingM};
  border-right: 1px solid ${({ theme }) => theme.grey};
  border-image: linear-gradient(to bottom, ${({ theme }) => theme.lightGrey} 0%, ${({ theme }) => theme.lightGrey} 70%,rgba(38, 34, 34,0) 70%,rgba(38, 34, 34,0) 100%);
  border-image-slice: 1;
  scroll-snap-align: center;

  ${({ theme }) => theme.mediaLarge} {
    border-right: none;
    border-image: none;
    padding-bottom: ${({ theme }) => theme.spacingS};
    border-bottom:  0.5px solid rgba(38, 34, 34, 0.1);
  }
`

const Heading = styled.h2`
  color: ${({ theme }) => theme.primaryRed};
  width: 100px;
  margin-bottom: ${({ theme }) => theme.spacingS};
  font-size: 20px;

  ${({ theme }) => theme.mediaLarge} {
    width: 100%;
  }
`

const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.secondaryFont};
  font-size: 14px;
  color: ${props => props.theme.grey};

  ${({ theme }) => theme.mediaLarge} {
    width: 180px;
  }
`

interface BookmarkList {
  bookmarkedArticles: Article[]
  removeBookmark: (arg1: number) => void
}


const BookmarkList = ({ bookmarkedArticles, removeBookmark }: BookmarkList) => (
  <Container>
    <BoldLine />
    <ThinLine />
    <ThinLine />
    <BookmarkContainer numberOfArticles={bookmarkedArticles?.length}>
      <Header>
        <Heading>Your bookmarks</Heading>
        <Subtitle>Articles you bookmark will be added to this list</Subtitle>
      </Header>
      {bookmarkedArticles?.map(article => (
        <BookmarkListItem key={article.id} removeBookmark={removeBookmark} {...article} />
      ))}
    </BookmarkContainer>

  </Container>
)

export default BookmarkList;
