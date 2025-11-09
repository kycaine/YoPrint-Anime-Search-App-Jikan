import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../app/store';
import { fetchAnimeList, setQuery, nextPage, prevPage } from '../features/animeSearch/animeSearchSlice';
import { SearchBar } from '../components/SearchBar';
import { AnimeCard } from '../components/AnimeCard';
import { SkeletonCard } from '../components/SkeletonCard';
import { ErrorMessage } from '../components/ErrorMessage';
import { EmptyState, InitialEmptyState } from '../components/EmptyState';
import { Pagination } from '../components/Pagination';

export const SearchPage = ({ onSelectAnime }: { onSelectAnime: (id: number) => void }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { query, list, page, hasNextPage, total, loading, error } = useSelector(
    (state: RootState) => state.animeSearch
  );
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 250);
    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    const controller = new AbortController();

    if (debouncedQuery.trim()) {
      dispatch(fetchAnimeList({ query: debouncedQuery, page, signal: controller.signal }));
    }

    return () => {
      controller.abort();
    };
  }, [debouncedQuery, page, dispatch]);

  const handleRetry = () => {
    const controller = new AbortController();
    dispatch(fetchAnimeList({ query, page, signal: controller.signal }));
  };

  return (
    <div className="app-container">
      <div className="container-main">
        <div className="search-header">
          <h1 className="search-title">Anime Search</h1>
          <p className="search-subtitle">Discover your next favorite anime</p>
        </div>

        <div className="search-bar-wrapper">
          <SearchBar
            value={query}
            onChange={(val) => dispatch(setQuery(val))}
            onClear={() => dispatch(setQuery(''))}
          />
        </div>

        {loading && (
          <div className="anime-grid">
            {Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)}
          </div>
        )}

        {/* Gunakan handleRetry yang baru */}
        {error && <ErrorMessage message={error} onRetry={handleRetry} />}

        {/* Empty State / No Results Handling */}
        {!loading && !error && list.length === 0 && query && <EmptyState message="Try another title" />}
        {!loading && !error && list.length === 0 && !query && <InitialEmptyState />}

        {!loading && !error && list.length > 0 && (
          <>
            <div className="anime-grid">
              {list.map((anime) => (
                <AnimeCard key={anime.mal_id} anime={anime} onClick={() => onSelectAnime(anime.mal_id)} />
              ))}
            </div>
            <Pagination
              currentPage={page}
              hasNextPage={hasNextPage}
              totalResults={total}
              onPrevious={() => dispatch(prevPage())}
              onNext={() => dispatch(nextPage())}
            />
          </>
        )}
      </div>
    </div>
  );
};