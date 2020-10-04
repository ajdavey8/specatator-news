
import React from 'react';
import { render } from '@testing-library/react'
import ArticleList from '../ArticleList'
import { ThemeProvider } from 'styled-components';

const addBookmark = jest.fn()

const theme = {
  green: "#29724c",
}

const articles = [
  {
    id: 1,
    title: 'The magic and mystery of English Cricket',
    author: 'Alex Massie',
    image: 'image'
  },
  {
    id: 2,
    title: 'Starman was firing blanks at PMQs',
    author: 'Lloyd Evans',
    image: 'image'
  },
]

const setup = () => {
  const utils = render(
    <ThemeProvider theme={theme}>
      <ArticleList
        articles={articles}
        addBookmark={addBookmark}
      />
    </ThemeProvider>
  )

  return {
    ...utils
  }
}

describe('<ArticleList>', () => {
  it('should return articles', () => {
    const { asFragment } = setup()
    expect(asFragment).toMatchSnapshot();
  })
})