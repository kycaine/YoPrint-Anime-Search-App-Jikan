export interface Anime {
  mal_id: number;
  title: string;
  title_english?: string;
  images: {
    jpg: {
      image_url: string;
      large_image_url?: string;
    };
  };
  synopsis?: string;
  score?: number;
  episodes?: number;
  status?: string;
  genres?: { mal_id: number; name: string }[];
  year?: number;
  rating?: string;
}

export interface AnimeListResponse {
  data: Anime[];
  pagination: {
    has_next_page: boolean;
    items: {
      total: number;
    };
  };
}

export interface AnimeDetailResponse {
  data: Anime;
}
