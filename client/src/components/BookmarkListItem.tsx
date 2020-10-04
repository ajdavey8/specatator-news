import React from 'react';
import styled from 'styled-components';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Article } from '../types';

const Container = styled.div`
  display: grid;
  grid-template-areas:
        'author button'
        'title title';
  grid-template-rows: 30px 1fr;
  grid-template-columns: 1fr 1fr;
  scroll-snap-align: center;
  margin: ${({ theme }) => theme.spacingS} 0 0 ${({ theme }) => theme.spacingS};
  min-width: 170px;

  ${({ theme }) => theme.mediaLarge} {
    margin-left: 0;
    grid-template-columns: 1fr 45px;
    grid-template-areas:
        'author button'
        'title .';
    padding-bottom: ${({ theme }) => theme.spacingS};
    border-bottom: 0.5px solid rgba(38, 34, 34, 0.1);    
  }
`

const Author = styled.a`
  grid-area: author;
  white-space: nowrap;
  color:  ${({ theme }) => theme.primaryRed};
  font-style: italic;
  font-size: 20px;
`

const Button = styled.button`
  grid-area: button;
  justify-self: end;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  box-shadow: 2px 2px 0 0 ${({ theme }) => theme.secondaryRed}, inset 2px 2px 0 0 #ffffff;
  border: solid 0.5px ${({ theme }) => theme.primaryRed};
  background-color: ${({ theme }) => theme.secondaryRed};
  color: ${({ theme }) => theme.primaryRed};
`

const Title = styled.h3`
  grid-area: title;
  font-size: 18px;
`

interface BookmarkListItem extends Article {
  removeBookmark: (arg1: number) => void
}

const BookmarkListItem = ({ id, author, title, removeBookmark }: BookmarkListItem) => {

  const handleClick = () => {
    removeBookmark(id)
  }

  return (
    <Container>
      <Author>{author}</Author>
      <Button data-testid="removeBookmark" onClick={handleClick}>
        <FontAwesomeIcon icon={faTimes} />
      </Button>
      <Title>{title} </Title>
    </Container>
  )
}

export default BookmarkListItem;