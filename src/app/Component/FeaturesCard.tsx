import React from "react";

function FeaturesCard({
  Logo,
  title,
  description,
}: {
  Logo: any;
  title: string;
  description: string;
}) {
  return (
    <div className="feature_card_container">
      <Logo size={60} color={"red"} />
      <h1 style={{ fontSize: "2.25rem", fontWeight: "800" }}>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default FeaturesCard;
