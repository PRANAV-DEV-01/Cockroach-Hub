import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <span className="text-6xl font-black text-ph-orange">404</span>
      <span className="text-4xl my-4">🪳</span>
      <Link to="/" className="ph-btn-primary">Go Home</Link>
    </div>
  );
}
