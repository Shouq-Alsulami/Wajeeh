import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function TopProblems() {
  const data = [
    { name: "Routing Failure", value: 19, color: "#0093B9" },
    { name: "Agent Login Failures", value: 12, color: "#FF6B6B" },
    { name: "API Call Errors", value: 28, color: "#00E1B3" },
    { name: "Escalation Spike", value: 10, color: "#FFA500" },
    { name: "Knowledge Base Gap", value: 7, color: "#6A5ACD" },
  ];

  return (
    <div
      style={{
        background: "#ffffff",
        padding: "14px",
        borderRadius: "14px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
        width: "100%",
        height: "260px",  
      }}
    >
      <h3
        style={{
          marginBottom: "8px",
          fontSize: "16px",
          fontWeight: 700,
          color: "#081C59",
        }}
      >
        Top System Issues (Weekly Overview)
      </h3>

      <ResponsiveContainer width="100%" height="88%">
        <RadarChart cx="50%" cy="52%" outerRadius="85%" data={data}>
    
          <PolarGrid stroke="#e6e6e6" />

          <PolarAngleAxis
            dataKey="name"
            tick={{ fill: "#004386", fontSize: "10px", fontWeight: 600 }}
          />

          <PolarRadiusAxis
            tick={{ fill: "#006BA7", fontSize: "11px" }}
            axisLine={false}
          />

          <Tooltip
            contentStyle={{
              background: "#ffffff",
              borderRadius: "8px",
              border: "1px solid #e6e6e6",
            }}
            formatter={(value) => [`${value}`, "Issues"]}
          />

          <Radar
            name="Issues"
            dataKey="value"
            stroke="#0093B9"
            fill="#0093B9"
            fillOpacity={0.45}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
