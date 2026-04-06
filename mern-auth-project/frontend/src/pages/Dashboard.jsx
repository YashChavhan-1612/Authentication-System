import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:5000/api/dashboard", {
      headers: { Authorization: token }
    })
    .then(res => setMsg(res.data.message))
    .catch(() => setMsg("Unauthorized"));
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-2xl">{msg}</h1>
    </div>
  );
}

export default Dashboard;