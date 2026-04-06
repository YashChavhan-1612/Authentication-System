import { useState } from "react";
import axios from "axios";

function Login() {
  const [form, setForm] = useState({});

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", form);
    localStorage.setItem("token", res.data.token);
    window.location.href = "/dashboard";
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-300">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl mb-4">Login</h2>

        <input className="border p-2 w-full mb-2 rounded" placeholder="Email"
          onChange={e => setForm({...form, email: e.target.value})} />

        <input type="password" className="border p-2 w-full mb-2 rounded" placeholder="Password"
          onChange={e => setForm({...form, password: e.target.value})} />

        <button onClick={handleLogin}
          className="bg-green-500 text-white w-full p-2 rounded">
          Login
        </button>
         <div className="flex m-2 ">
          <h2>If Already Login ?  </h2>
          <a href="/signup">Registered Here</a>
        </div>
      </div>
    </div>
  );
}

export default Login;