function SectionTitle({ children, subtitle, align = "center" }) {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`mb-10 ${alignment[align]}`}>
      <h2 className="text-4xl font-bold tracking-tight text-gray-900">
        {children}
      </h2>

      {subtitle && <p className="mt-3 text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
