import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { status } = useSelector((state) => state.auth);

  if (!status) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
