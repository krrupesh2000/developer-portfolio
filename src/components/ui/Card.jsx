function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2 hover:shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;
