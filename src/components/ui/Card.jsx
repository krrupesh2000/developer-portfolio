function Card({ children, className = '' }) {
  return (
    <div
      className={`
        bg-card
        shadow-sm
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;
