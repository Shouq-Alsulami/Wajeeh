import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

import TicketVolumeChart from "../components/TicketVolumeChart";
import Conversation from "../components/Conversation";
import CSAT from "../components/CSAT";
import AvgResponseTime from "../components/AvgResponseTime";
import TopProblems from "../components/TopProblems";
import CustomerSessions from "../components/CustomerSessions";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Ticket",
      value: 1240,
      icon: <TrendingUpIcon style={{ color: "#006BA7", fontSize: 30 }} />,
    },
    {
      title: "Resolved Tickets",
      value: 980,
      icon: <CheckCircleIcon style={{ color: "#00E1B3", fontSize: 30 }} />,
    },
    {
      title: "Escalated Cases",
      value: 120,
      icon: <ErrorIcon style={{ color: "#FF6B6B", fontSize: 30 }} />,
    },
    {
      title: "CSAT",
      value: "92%",
      icon: <EmojiEmotionsIcon style={{ color: "#0093B9", fontSize: 30 }} />,
    },
    {
      title: "Avg. Resolution Time",
      value: "1.15 hrs",
      icon: <AccessTimeFilledIcon style={{ color: "#00BBBC", fontSize: 30 }} />,
    },
  ];

  return (
    <div style={{ padding: "0px" }}>
      {/* KPIs ROW */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          paddingBottom: "10px",
          whiteSpace: "nowrap",
        }}
      >
        {stats.map((item) => (
          <div
            key={item.title}
            style={{
              minWidth: "220px",
              maxWidth: "220px",
              background: "#ffffff",
              padding: "16px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              borderRadius: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                fontWeight: 600,
                color: "#081C59",
                fontSize: "14px",
              }}
            >
              {item.icon}
              {item.title}
            </div>

            <div
              style={{
                fontSize: "26px",
                fontWeight: 700,
                color: "#004386",
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* ROW 2 : VOLUME + STATUS + CSAT */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 2fr 1.4fr",
          gap: "12px",
          marginTop: "12px",
        }}
      >
        <TicketVolumeChart />
        <Conversation />
        <CSAT value={92} />
      </div>

      {/* ROW 3 : RESPONSE + PROBLEMS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2.2fr 1.4fr",
          gap: "12px",
          marginTop: "12px",
        }}
      >
        <AvgResponseTime />
        <TopProblems />
      </div>

      {/* ROW 4 : CUSTOMER SESSIONS TABLE - FULL WIDTH */}
      <div style={{ marginTop: "15px" }}>
        <CustomerSessions />
      </div>
    </div>
  );
}
