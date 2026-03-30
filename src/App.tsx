import { Navigate, Route, Routes } from "react-router-dom";
import { AmazonMainImagesPage } from "./components/studio/AmazonMainImagesPage";
import { StudioPage } from "./components/studio/StudioPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/studio" replace />} />
      <Route path="/studio" element={<StudioPage />} />
      <Route path="/studio/amazon-main-images" element={<AmazonMainImagesPage />} />
    </Routes>
  );
}
