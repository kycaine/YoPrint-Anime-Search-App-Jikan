import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  currentPage: number;
  hasNextPage: boolean;
  totalResults: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const Pagination: React.FC<Props> = ({
  currentPage,
  hasNextPage,
  totalResults,
  onPrevious,
  onNext,
}) => (
  <div className="pagination-controls">
    <button onClick={onPrevious} disabled={currentPage === 1} className="pagination-button">
      <ChevronLeft size={20} /> Previous
    </button>
    <span className="pagination-info">
      Page {currentPage} {totalResults > 0 && `(${totalResults} results)`}
    </span>
    <button onClick={onNext} disabled={!hasNextPage} className="pagination-button">
      Next <ChevronRight size={20} />
    </button>
  </div>
);
