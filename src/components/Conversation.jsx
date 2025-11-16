import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function Conversation() {
  const data = [
    { name: "Resolved Tickets", value: 65 },
    { name: "In-Progress", value: 18 },
    { name: "Customer Left", value: 17 },
  ];


  const COLORS = ["#7BC8D6", "#A8DCE3", "#6A8CAF"];

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
        width: "100%",
        height: "260px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      
      {/* LEFT LABELS */}
      <div style={{ width: "48%" }}>
        <h3
          style={{
            color: "#081C59",
            marginBottom: "16px",
            fontSize: "16px",
            fontWeight: 600,
          }}
        >
          Ticket Status Overview
        </h3>

        {data.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              fontSize: "14px",
              color: "#004386",
              fontWeight: 500,
            }}
          >
            {/* اللون */}
            <span
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: COLORS[index],
                borderRadius: "3px",
                marginRight: "10px",
              }}
            ></span>

            {/* الاسم */}
            {item.name}

            {/* النسبة */}
            <span style={{ marginLeft: "auto", fontWeight: "700", color: "#081C59" }}>
              {item.value}%
            </span>
          </div>
        ))}
      </div>

      {/* DONUT CHART */}
      <div style={{ width: "48%", height: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip />

            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={80}
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index]}
                  stroke="#ffffff"
                  strokeWidth={2}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
