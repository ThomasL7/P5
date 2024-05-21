function Banner({ title, src, alt }) {
  return (
    <div className="banner">
      <div className="black-filter"></div>
      {title !== undefined && <h2>{title}</h2>}
      <img src={src} alt={alt} />
    </div>
  );
}

export default Banner;
