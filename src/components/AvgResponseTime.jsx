import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
} from "recharts";

const generateData = () => {
  const arr = [];
  for (let i = 1; i <= 40; i++) {
    const respTime = Number((Math.random() * 8 + 0.5).toFixed(1));
    arr.push({
      id: `#10${400 + i}`,
      time: respTime,
    });
  }
  return arr;
};

export default function AvgResponseTime() {
  const data = generateData();

  const getColor = (t) => {
    if (t < 2) return "#00C4A7";   
    if (t < 5) return "#4A90E2";   
    return "#FF6B6B";           
  };

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.9)",
        padding: "20px",
        borderRadius: "16px",
        width: "100%",
        height: "260px",
        overflowX: "auto",
        whiteSpace: "nowrap",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
      }}
    >
      
      <h3
        style={{
          color: "#081C59",
          fontWeight: "700",
          fontSize: "17px",
          marginBottom: "12px",
        }}
      >
        Avg. Response Time per Conversation
      </h3>

      <div style={{ width: `${data.length * 50}px`, height: "210px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#EFF2F6" strokeDasharray="3 3" />

            <XAxis
              dataKey="id"
              tick={{ fill: "#004386", fontWeight: 500, fontSize: 10 }}
              interval={0}
              angle={-50}
              textAnchor="end"
              height={65}
            />

            <YAxis
              unit="s"
              domain={[0, 10]}
              tick={{ fill: "#006BA7", fontWeight: 600 }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#ffffff",
                borderRadius: "12px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              }}
            />

            {/* soft shaded area */}
            <defs>
              <linearGradient id="respShade" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4A90E2" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#4A90E2" stopOpacity={0} />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="time"
              fill="url(#respShade)"
              stroke="none"
            />

            <Line
              type="monotone"
              dataKey="time"
              stroke="#A8B3C7"
              strokeWidth={2}
              dot={(props) => {
                const color = getColor(props.payload.time);
                return (
                  <circle
                    cx={props.cx}
                    cy={props.cy}
                    r={5}
                    stroke="#fff"
                    strokeWidth={2}
                    fill={color}
                  />
                );
              }}
              activeDot={(props) => {
                const color = getColor(props.payload.time);
                return (
                  <circle
                    cx={props.cx}
                    cy={props.cy}
                    r={7}
                    stroke="#fff"
                    strokeWidth={2}
                    fill={color}
                  />
                );
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
