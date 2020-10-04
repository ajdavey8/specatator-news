import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import BookmarkList from './components/BookmarkList';
import Header from './components/Header';
import GlobalStyles from './components/GlobalStyles';
import ArticleList from './components/ArticleList';
import { getArticles } from './api/articles';
import useArticles from './hooks/useArticles';
import theme from './theme';


const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaLarge} {
    flex-direction: row-reverse;
    margin: ${({ theme }) => theme.spacingL} auto;
    max-width: 1200px;
  }
`

const App = () => {
  const { articles, setArticles, bookmarkedArticles, addBookmark, removeBookmark } = useArticles();
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await getArticles()

      if (response.ok) {
        setArticles(response.data.articles)
        setIsLoading(false)
      } else {
        setIsError(true)
      }
    }
    fetchArticles()
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Container>
          <BookmarkList bookmarkedArticles={bookmarkedArticles} removeBookmark={removeBookmark} />
          {isError && <div>Unable to fetch articles</div>}
          {isLoading ? (
            <div>Loading articles...</div>
          ) : (
              <ArticleList articles={articles} addBookmark={addBookmark} />
            )}
        </Container>
      </ThemeProvider>
    </>
  )
};

export default App;