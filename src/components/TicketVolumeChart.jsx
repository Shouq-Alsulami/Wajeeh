import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Sat", tickets: 420 },
  { day: "Sun", tickets: 680 },
  { day: "Mon", tickets: 910 },
  { day: "Tue", tickets: 1200 },
  { day: "Wed", tickets: 820 },
  { day: "Thu", tickets: 950 },
  { day: "Fri", tickets: 700 },
];

export default function TicketVolumeChart() {
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
        flexDirection: "column",
      }}
    >
      <h3
        style={{
          color: "#081C59",
          fontWeight: 600,
          fontSize: "16px",
          margin: "0 0 14px 0",
        }}
      >
        Ticket Volume
      </h3>

      <div style={{ flex: 1 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e6e6e6" />

            <XAxis
              dataKey="day"
              tick={{ fill: "#004386", fontWeight: 600 }}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#006BA7", fontWeight: 600 }}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#ffffff",
                border: "1px solid #e6e6e6",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "#081C59", fontWeight: 600 }}
            />

          
            <Bar
              dataKey="tickets"
              fill="#7BC8D6"
              barSize={22}
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
