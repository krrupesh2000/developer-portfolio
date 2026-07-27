function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-slate-800
        bg-card
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;
