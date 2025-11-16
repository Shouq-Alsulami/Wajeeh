import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";

export default function Feedback() {
  const ratings = [
    { stars: 5, count: 1180 },
    { stars: 4, count: 200 },
    { stars: 3, count: 100 },
    { stars: 2, count: 80 },
    { stars: 1, count: 20 },
  ];

  const max = 1180;

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.85)",
      
        padding: "18px",
        width: "100%",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Title */}
      <h3
        style={{
          color: "#081C59",
          fontWeight: "700",
          fontSize: "18px",
          marginBottom: "10px",
        }}
      >
        Customer Feedback
      </h3>

      {/* Rating Box */}
      <div
        style={{
          background: "linear-gradient(135deg, #006BA7, #00E1B3)",
          borderRadius: "12px",
          padding: "14px",
          color: "white",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "36px", fontWeight: "700" }}>4.9</div>

        {/* Stars */}
        <div style={{ margin: "6px 0" }}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
        </div>

        <div style={{ fontSize: "14px", opacity: 0.9 }}>1,580 Ratings</div>
      </div>

      {/* Rating Bars */}
      <div style={{ marginTop: "10px" }}>
        {ratings.map((r) => (
          <div
            key={r.stars}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "6px",
            }}
          >
            <span style={{ width: "20px", color: "#081C59" }}>{r.stars}</span>
            <span>
              <StarIcon sx={{ color: "#F6A609", fontSize: "18px" }} />
            </span>

            {/* Bar */}
            <div
              style={{
                flex: 1,
                height: "8px",
                background: "#e6e6e6",
                borderRadius: "4px",
                margin: "0 10px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${(r.count / max) * 100}%`,
                  height: "100%",
                  background: "#F6A609",
                  borderRadius: "4px",
                }}
              ></div>
            </div>

            <span style={{ color: "#004386", fontWeight: 600 }}>
              {r.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
