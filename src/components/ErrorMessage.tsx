import React from 'react';
import { AlertCircle } from 'lucide-react';

interface Props {
  message: string;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<Props> = ({ message, onRetry }) => (
  <div className="message-state">
    <AlertCircle className="error-icon" size={48} />
    <h3 className="message-title">Oops! Something went wrong</h3>
    <p className="message-text">{message}</p>
    {onRetry && (
      <button onClick={onRetry} className="message-button">
        Try Again
      </button>
    )}
  </div>
);
