import React from 'react';
import { Star } from 'lucide-react';
import type { Anime } from '../types/anime';

interface Props {
  anime: Anime;
  onClick: () => void;
}

export const AnimeCard: React.FC<Props> = ({ anime, onClick }) => (
  <div onClick={onClick} className="anime-card">
    <div className="anime-card-image-wrapper">
      <img
        src={anime.images.jpg.image_url}
        alt={anime.title}
        className="anime-card-image"
        loading="lazy"
      />
      {anime.score && (
        <div className="anime-card-score">
          <Star size={14} fill="currentColor" />
          {anime.score.toFixed(1)}
        </div>
      )}
    </div>
    <div className="anime-card-content">
      <h3 className="anime-card-title">{anime.title}</h3>
      {anime.title_english && anime.title_english !== anime.title && (
        <p className="anime-card-english-title">{anime.title_english}</p>
      )}
      <div className="anime-card-meta">
        {anime.year && <span>{anime.year}</span>}
        {anime.episodes && <span>{anime.episodes} eps</span>}
      </div>
    </div>
  </div>
);
