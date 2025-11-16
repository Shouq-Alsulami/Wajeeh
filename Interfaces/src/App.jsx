import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import EscalationCenter from "./pages/EscalationCenter";
import ConversationView from "./pages/ConversationView";
import Customization from "./pages/Customization";
import ChannelIntegrations from "./pages/ChannelIntegrations";


export default function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/EscalationCenter" element={<EscalationCenter />} />
        <Route path="/conversation/:sessionId" element={<ConversationView />} />
        <Route path="/customization" element={<Customization />} />
        <Route path="/integrations" element={<ChannelIntegrations />} />
      </Routes>
    </DashboardLayout>
  );
}

