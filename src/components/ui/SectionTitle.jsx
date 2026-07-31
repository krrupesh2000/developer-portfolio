function SectionTitle({ children, subtitle, align = 'center' }) {
  const alignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-10 ${alignment[align]}`}>
      <h2 className="type-section-title font-bold text-foreground">
        {children}
      </h2>

      {subtitle && (
        <p className="type-body mx-auto mt-3 max-w-3xl text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
