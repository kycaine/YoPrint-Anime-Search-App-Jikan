import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { animeService } from '../../api/animeService';
import type { Anime, AnimeListResponse } from '../../types/anime';

interface AnimeSearchState {
  query: string;
  list: Anime[];
  page: number;
  hasNextPage: boolean;
  total: number;
  loading: boolean;
  error: string | null;
}

const initialState: AnimeSearchState = {
  query: '',
  list: [],
  page: 1,
  hasNextPage: false,
  total: 0,
  loading: false,
  error: null,
};

export const fetchAnimeList = createAsyncThunk<
  AnimeListResponse,
  { query: string; page: number; signal?: AbortSignal } 
>('animeSearch/fetchList', async ({ query, page }, { signal }) => {
  return await animeService.fetchAnimeList(query, page, signal); 
});

const animeSearchSlice = createSlice({
  name: 'animeSearch',
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
      state.page = 1; 
    },
    nextPage(state) {
      state.page += 1;
    },
    prevPage(state) {
      state.page -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimeList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnimeList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.data;
        state.hasNextPage = action.payload.pagination.has_next_page;
        state.total = action.payload.pagination.items.total;
      })
      .addCase(fetchAnimeList.rejected, (state, action) => {
        if (action.error.name === 'AbortError') {
          return; 
        }

        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch anime';
      });
  },
});

export const { setQuery, nextPage, prevPage } = animeSearchSlice.actions;
export default animeSearchSlice.reducer;