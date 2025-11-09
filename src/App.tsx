import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader2 } from 'lucide-react';
import { SearchPage } from './pages/SearchPage';
import { DetailPage } from './pages/DetailPage';
import { fetchAnimeDetail, clearDetail } from './features/animeDetail/animeDetailSlice';
import type { RootState, AppDispatch } from './app/store';

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { selectedAnime, loading } = useSelector((state: RootState) => state.animeDetail);
  const [selectedAnimeId, setSelectedAnimeId] = React.useState<number | null>(null);

  useEffect(() => {
    if (selectedAnimeId !== null) {
      dispatch(fetchAnimeDetail(selectedAnimeId));
    }
  }, [selectedAnimeId, dispatch]);

  if (loading) {
    return (
      <div className="app-container loading-page">
        <Loader2 className="loader" size={48} />
      </div>
    );
  }

  if (selectedAnime) {
    return <DetailPage anime={selectedAnime} onBack={() => { setSelectedAnimeId(null); dispatch(clearDetail()); }} />;
  }

  return <SearchPage onSelectAnime={setSelectedAnimeId} />;
}
