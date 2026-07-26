function Button({ children, variant = "primary", ...props }) {
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",

    secondary:
      "border border-black bg-transparent text-black hover:bg-black hover:text-white",
  };

  return (
    <button
      className={`rounded-lg px-6 py-3 font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
