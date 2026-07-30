function SectionTitle({ children, subtitle, align = 'center' }) {
  const alignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-10 ${alignment[align]}`}>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {children}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
