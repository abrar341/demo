// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Settings from "./components/pages/Settings";
import Inbox from "./components/pages/Inbox";
import Dashboard from "./components/pages/Dashboard";
import Schedule from "./components/pages/Schedule";
import Reviews from "./components/pages/Reviews";
import TreatmentsSettings from "./components/pages/TreatmentsSettings";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="settings" element={<Settings />}>
            {/* Redirect /settings to /settings/treatments */}
            <Route index element={<Navigate to="treatments" replace />} />
            {/* <Route path="general" element={<GeneralSettings />} />
                        <Route path="password" element={<PasswordSettings />} />
                        <Route path="price" element={<PriceSettings />} /> */}
            <Route path="treatments" element={<TreatmentsSettings />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
