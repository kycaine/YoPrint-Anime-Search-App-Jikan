import React from 'react';
import { ArrowLeft, Star } from 'lucide-react';
import type { Anime } from '../types/anime';

interface Props {
  anime: Anime;
  onBack: () => void;
}

export const DetailPage: React.FC<Props> = ({ anime, onBack }) => (
  <div className="detail-page-container">
    <div className="detail-content-wrapper">
      <button onClick={onBack} className="detail-back-button">
        <ArrowLeft size={20} /> Back to Search
      </button>

      <div className="detail-card">
        <div className="detail-layout">
          <div className="detail-image-col">
            <img
              src={anime.images.jpg.large_image_url || anime.images.jpg.image_url}
              alt={anime.title}
              className="detail-image"
            />
          </div>

          <div className="detail-content-col">
            <h1 className="detail-title">{anime.title}</h1>
            {anime.title_english && anime.title_english !== anime.title && (
              <p className="detail-english-title">{anime.title_english}</p>
            )}

            <div className="detail-meta-group">
              {anime.score && (
                <div className="detail-meta-item detail-meta-score">
                  <Star size={18} className="detail-meta-score-star" fill="#fbbf24" />
                  <span className="font-bold">{anime.score.toFixed(2)}</span>
                </div>
              )}
              {anime.year && <div className="detail-meta-item detail-meta-year">{anime.year}</div>}
              {anime.episodes && (
                <div className="detail-meta-item detail-meta-episodes">
                  {anime.episodes} Episodes
                </div>
              )}
              {anime.status && (
                <div className="detail-meta-item detail-meta-status">{anime.status}</div>
              )}
            </div>

        {anime.genres?.length ? (
            <div className="detail-section-genres">
                <h3 className="detail-section-title">Genres</h3>
                <div className="detail-genres-list">
                {anime.genres.map((genre) => (
                    <span key={genre.mal_id} className="detail-genre-pill">
                    {genre.name}
                    </span>
                ))}
                </div>
            </div>
            ) : null}


            {anime.synopsis && (
              <div>
                <h3 className="detail-section-title">Synopsis</h3>
                <p className="detail-synopsis-text">{anime.synopsis}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);
