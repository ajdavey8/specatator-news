import React, { useState } from 'react';
import { Article } from '../types';

const useArticles = () => {
  const [articles, setArticles] = useState<Article[]>([])

  function addBookmark(id: number) {
    const updatedArticles = articles.map(
      (article: Article) => article.id === id ?
        { ...article, bookmarked: true }
        : article)
    setArticles(updatedArticles)
  }

  function removeBookmark(id: number) {
    const updatedArticles = articles.map(
      (article: Article) => article.id === id ?
        { ...article, bookmarked: false }
        : article)
    setArticles(updatedArticles)
  }

  const bookmarkedArticles = articles?.filter(article => article.bookmarked)

  return {
    articles,
    setArticles,
    bookmarkedArticles,
    addBookmark,
    removeBookmark
  }
}

export default useArticles;