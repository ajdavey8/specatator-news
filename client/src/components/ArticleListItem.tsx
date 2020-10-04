import React, { useContext } from 'react';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { ThemeContext } from 'styled-components';
import { Article } from '../types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ theme }) => theme.spacingM};
  margin-bottom: ${({ theme }) => theme.spacingL};
  border-bottom: 0.5px solid ${({ theme }) => theme.lightGrey};
`

const Author = styled.a`
  color:  ${({ theme }) => theme.primaryRed};
  margin-bottom: ${({ theme }) => theme.spacingS};
  font-style: italic;
  font-size: 18px;
`

const Title = styled.h3`
  font-size: 24px;
`

const Button = styled.button<{
  bookmarked?: boolean;
}>`
  margin: ${({ theme }) => theme.spacingM} 0;
  width: 112px;
  padding: 4px 0;
  font-size: 12px;
  font-family: ${({ theme }) => theme.buttonFont};
  border-radius: 10px;
  border: solid 0.5px ${props => props.bookmarked ? 'rgba(38, 34, 34, 0.15)' : props.theme.primaryRed};
  background-color: ${props => props.bookmarked ? 'rgba(38, 34, 34, 0.05)' : props.theme.secondaryRed};
  color:  ${props => props.bookmarked ? 'rgba(38, 34, 34, 0.4)' : props.theme.primaryRed};
  
  ${(props) => !props.bookmarked && `
    box-shadow: 2px 2px 0 0 ${props.theme.secondaryRed}, inset 2px 2px 0 0 #ffffff;
`}
`

const Image = styled.img`
  width: 100%;

  ${({ theme }) => theme.mediaMedium} {
    height: 160px;
  }

  ${({ theme }) => theme.mediaLarge} {
    height: 160px;
  }
`

interface ArticleListItem extends Article {
  addBookmark: (arg1: number) => void
}

const ArticleListItem = ({ id, title, author, image, bookmarked, addBookmark }: ArticleListItem) => {
  const { green } = useContext(ThemeContext);

  const handleClick = () => {
    addBookmark(id)
  }

  return (
    <Container>
      <Author>{author}</Author>
      <Title>{title}</Title>
      <Button bookmarked={bookmarked} disabled={bookmarked} onClick={handleClick}>
        {bookmarked ?
          (<>ADDED <FontAwesomeIcon icon={faCheck} color={green} /> </>) :
          (<>ADD <FontAwesomeIcon icon={faStar} /> </>)
        }
      </Button>
      <Image src={image} />
    </Container>
  )
}

export default ArticleListItem;
