import { renderHook, act } from '@testing-library/react-hooks';
import useArticles from '../useArticles';


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

const bookmarkedArticle = {
  id: 1,
  title: 'The magic and mystery of English Cricket',
  author: 'Alex Massie',
  image: 'image',
  bookmarked: true
}

describe('useArticles', () => {
  it('renders with initial values', () => {
    const { result: { current } } = renderHook(() => useArticles())

    expect(current.articles).toEqual([])
  })

  it('can add articles', () => {
    const { result } = renderHook(() => useArticles())

    act(() => result.current.setArticles(articles));

    expect(result.current.articles).toEqual(articles);
  })

  it('can add a bookmark to an article', () => {
    const { result } = renderHook(() => useArticles())
    act(() => result.current.setArticles(articles));

    act(() => result.current.addBookmark(articles[0].id));

    expect(result.current.articles[0].bookmarked).toEqual(true);
    expect(result.current.articles[0]).toEqual(bookmarkedArticle);
  })


  it('can remove a bookmark from an article', () => {
    const { result } = renderHook(() => useArticles())
    act(() => result.current.setArticles([bookmarkedArticle]));

    act(() => result.current.removeBookmark(articles[0].id));

    expect(result.current.articles[0].bookmarked).toEqual(false);
  })

  it('can return bookmarked articles', () => {
    const { result } = renderHook(() => useArticles())
    act(() => result.current.setArticles([bookmarkedArticle]));

    expect(result.current.bookmarkedArticles).toEqual([bookmarkedArticle]);
  })

})