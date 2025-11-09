
export const EmptyState = ({ message }: { message: string }) => (
  <div className="message-state">
    <div className="empty-state-icon">🔍</div>
    <h3 className="message-title">No Results Found</h3>
    <p className="message-text">{message}</p>
  </div>
);

export const InitialEmptyState = () => (
  <div className="message-state">
    <div className="empty-state-icon">🎬</div>
    <p className="message-text">Start typing to search for anime</p>
  </div>
);
