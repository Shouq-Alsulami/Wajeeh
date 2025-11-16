import React from "react";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

export default function CSAT({ value = 75 }) {
  const data = [
    {
      name: "CSAT",
      value: value,
      fill: "url(#softGauge)",
    },
  ];

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "16px",
        padding: "20px",
        width: "100%",
        height: "260px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          color: "#081C59",
          marginBottom: "10px",
          fontSize: "16px",
          fontWeight: "700",
        }}
      >
        Customer Satisfaction
      </h3>

      <ResponsiveContainer width="100%" height="70%">
        <RadialBarChart
          cx="50%"
          cy="85%"
          innerRadius="65%"
          outerRadius="105%"
          barSize={12}
          startAngle={180}
          endAngle={0}
          data={data}
        >
          {/* Soft pastel gradient */}
          <defs>
            <linearGradient id="softGauge" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7BC8D6" />
              <stop offset="50%" stopColor="#A8DCE3" />
              <stop offset="100%" stopColor="#6A8CAF" />
            </linearGradient>
          </defs>

          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />

          <RadialBar
            dataKey="value"
            cornerRadius={20}
            background={{ fill: "#E8EEF4" }}
          />
        </RadialBarChart>
      </ResponsiveContainer>

      {/* Percentage */}
      <div
        style={{
          marginTop: "-45px",
          fontSize: "28px",
          fontWeight: "700",
          color: "#081C59",
        }}
      >
        {value}%
      </div>

      {/* 0 — 100 label */}
      <div
        style={{
          marginTop: "12px",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10px",
          color: "#6B7C93",
          fontSize: "13px",
          fontWeight: "600",
        }}
      >
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  );
}
