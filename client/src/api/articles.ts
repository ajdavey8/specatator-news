import { RequestResponse, Article } from '../types';

interface ArticlesResponse {
  articles: Article[]
}

const articlesUrl = 'http://localhost:3000/api/articles'

export async function getArticles(): Promise<RequestResponse<ArticlesResponse>> {
  try {
    const response = await fetch(articlesUrl)
    const data = await response.json()

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return {
      ok: true,
      data
    }
  } catch (error) {
    return {
      ok: false,
      data: null,
      error: error.message
    }
  }
}