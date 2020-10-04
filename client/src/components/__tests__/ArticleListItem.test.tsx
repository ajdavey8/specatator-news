import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import ArticleListItem from '../ArticleListItem';
import { ThemeProvider } from 'styled-components';

const addBookmark = jest.fn()

const theme = {
  green: "#29724c",
}

const setup = () => {
  const utils = render(
    <ThemeProvider theme={theme}>
      <ArticleListItem
        id={1}
        author='Alex'
        title='title'
        image='imageURL'
        addBookmark={addBookmark}
      />
    </ThemeProvider>
  )

  return {
    ...utils
  }
}

describe('<ArticleListItem>', () => {
  it('renders with the passed props', () => {
    const { asFragment } = setup()
    expect(asFragment).toMatchSnapshot();
  })

  it('calls the onClick function to add bookmark', () => {
    const { getByText } = setup()

    fireEvent.click(getByText('ADD'))

    expect(addBookmark).toHaveBeenCalledWith(1)
  })

})