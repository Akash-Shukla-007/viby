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
      <Logo size={60} color={"hsla(219, 87%, 55%, 1)"} />
      <h1
        style={{
          fontWeight: "800",
          marginTop: "15px",
          color: "#141c4b",
        }}
      >
        {title}
      </h1>
      <p style={{ fontWeight: "600", color: "grey" }}>{description}</p>
    </div>
  );
}

export default FeaturesCard;
