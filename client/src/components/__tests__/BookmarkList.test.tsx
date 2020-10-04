
import React from 'react';
import { render } from '@testing-library/react'
import BookmarkList from '../BookmarkList'

const removeBookmark = jest.fn()

const articles = [
  {
    id: 1,
    title: 'The magic and mystery of English Cricket',
    author: 'Alex Massie',
    image: 'image',
    bookmarked: true,
  },
  {
    id: 2,
    title: 'Starman was firing blanks at PMQs',
    author: 'Lloyd Evans',
    image: 'image',
    bookmarked: true,
  },
]

const setup = () => {
  const utils = render(
    <BookmarkList
      bookmarkedArticles={articles}
      removeBookmark={removeBookmark}
    />
  )

  return {
    ...utils
  }
}

describe('<BookmarkList>', () => {
  it('should return bookmarked articles', () => {
    const { asFragment } = setup()
    expect(asFragment).toMatchSnapshot();
  })
})