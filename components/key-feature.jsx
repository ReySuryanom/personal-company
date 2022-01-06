function KeyFeature({ icon, label, desc }) {
  return (
    <article className="space-y-5 text-center">
      {icon}
      <h3 className="text-lg font-semibold">{label}</h3>
      <p className="w-11/12 text-sm leading-7 text-left">{desc}</p>
    </article>
  );
}

export default KeyFeature;
