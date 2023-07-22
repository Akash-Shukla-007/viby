function WebCard({
  src,
  title,
  subTitle,
}: {
  src?: any;
  title: string;
  subTitle: string;
}) {
  return (
    <div className="webcard_container">
      <img src={src} alt="viby features image" />
      <h1 className="webCard_title">{title}</h1>
      <h2 className="webCard_subTitle">{subTitle}</h2>
    </div>
  );
}

export default WebCard;
