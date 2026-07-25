import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Emergency from "./pages/Emergency";
import LiveFeed from "./pages/LiveFeed";
import LegalRights from "./pages/LegalRights";
import FactCheck from "./pages/FactCheck";
import SubmitReport from "./pages/SubmitReport";
import FirstAid from "./pages/FirstAid";
import SOS from "./pages/SOS";
import Checklist from "./pages/Checklist";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/live-feed" element={<LiveFeed />} />
        <Route path="/legal-rights" element={<LegalRights />} />
        <Route path="/fact-check" element={<FactCheck />} />
        <Route path="/submit" element={<SubmitReport />} />
        <Route path="/first-aid" element={<FirstAid />} />
        <Route path="/sos" element={<SOS />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-center" />
    </>
  );
}
