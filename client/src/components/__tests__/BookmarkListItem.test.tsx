import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import BookmarkListItem from '../BookmarkListItem';

const removeBookmark = jest.fn()

const setup = () => {
  const utils = render(
    <BookmarkListItem
      id={1}
      author='Alex'
      title='title'
      image='imageURL'
      removeBookmark={removeBookmark}
    />
  )

  return {
    ...utils
  }
}

describe('<BookmarkListItem>', () => {
  it('renders with the passed props', () => {
    const { asFragment } = setup()
    expect(asFragment).toMatchSnapshot();
  })

  it('calls the onClick function to add bookmark', () => {
    const { getByTestId } = setup()

    fireEvent.click(getByTestId("removeBookmark"))

    expect(removeBookmark).toHaveBeenCalledWith(1)
  })

})