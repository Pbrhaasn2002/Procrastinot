import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
    window.location.reload(); // Refresh to trigger updated navbar
  };

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Login to Procrastinot</h1>
      <button
        onClick={handleLogin}
        className="px-6 py-2 bg-purple-600 rounded hover:bg-purple-700 transition"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
