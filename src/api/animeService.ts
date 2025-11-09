import type { AnimeListResponse, AnimeDetailResponse } from '../types/anime';

const JIKAN_BASE_URL = 'https://api.jikan.moe/v4';

export const animeService = {
  fetchAnimeList: async (
    query: string,
    page: number = 1,
    signal?: AbortSignal
  ): Promise<AnimeListResponse> => {
    const response = await fetch(
      `${JIKAN_BASE_URL}/anime?q=${encodeURIComponent(query)}&page=${page}&limit=20`,
      { signal }
    );
    if (!response.ok) throw new Error('Failed to fetch anime list');
    return response.json();
  },

  fetchAnimeDetail: async (
    id: number,
    signal?: AbortSignal
  ): Promise<AnimeDetailResponse> => {
    const response = await fetch(`${JIKAN_BASE_URL}/anime/${id}`, { signal });
    if (!response.ok) throw new Error('Failed to fetch anime details');
    return response.json();
  },
};
