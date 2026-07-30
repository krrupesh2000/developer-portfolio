function Button({
  as: Component = 'button',
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = `
  inline-flex
  items-center
  justify-center
  text-center
  rounded-lg
  px-6
  py-3
  font-medium
  transition-default
  hover:scale-[1.02]
  active:scale-[0.98]
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-primary
  focus-visible:ring-offset-2
  disabled:pointer-events-none
  disabled:opacity-50
`;

  const variants = {
    primary: `
      bg-primary
      text-white
      hover:bg-primary-hover
    `,

    secondary: `
      border
      border-primary
      bg-transparent
      text-foreground
      hover:bg-primary
      hover:text-white
    `,
  };

  return (
    <Component
      type={Component === 'button' ? type : undefined}
      disabled={Component === 'button' ? disabled : undefined}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
