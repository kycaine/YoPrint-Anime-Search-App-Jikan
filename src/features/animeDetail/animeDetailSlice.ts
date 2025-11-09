import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { animeService } from '../../api/animeService';
import type { AnimeDetailResponse, Anime } from '../../types/anime';

interface AnimeDetailState {
  selectedAnime: Anime | null;
  loading: boolean;
  error: string | null;
}

const initialState: AnimeDetailState = {
  selectedAnime: null,
  loading: false,
  error: null,
};

export const fetchAnimeDetail = createAsyncThunk<
  AnimeDetailResponse,
  number
>('animeDetail/fetchDetail', async (id, { signal }) => {
  return await animeService.fetchAnimeDetail(id, signal);
});

const animeDetailSlice = createSlice({
  name: 'animeDetail',
  initialState,
  reducers: {
    clearDetail(state) {
      state.selectedAnime = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnimeDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnimeDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedAnime = action.payload.data;
      })
      .addCase(fetchAnimeDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch anime details';
      });
  },
});

export const { clearDetail } = animeDetailSlice.actions;
export default animeDetailSlice.reducer;
