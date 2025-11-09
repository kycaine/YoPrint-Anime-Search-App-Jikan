import React from 'react';
import { Search } from 'lucide-react';

interface Props {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export const SearchBar: React.FC<Props> = ({ value, onChange, onClear }) => (
  <div className="search-bar">
    <Search className="search-bar-icon" size={20} />
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search for anime..."
      className="search-bar-input"
    />
    {value && (
      <button onClick={onClear} className="search-bar-clear-button">
        &times;
      </button>
    )}
  </div>
);
