import { useState } from "react";
import axios from "axios";

function Signup() {
  const [form, setForm] = useState({});

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/api/auth/signup", form);
    alert("Signup Successful");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-300">
      <div className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl mb-4">Signup</h2>

        <input className="border p-2 w-full mb-2 rounded" placeholder="Name"
          onChange={e => setForm({...form, name: e.target.value})} />

        <input className="border p-2 w-full mb-2 rounded" placeholder="Email"
          onChange={e => setForm({...form, email: e.target.value})} />

        <input type="password" className="border p-2 w-full mb-2 rounded" placeholder="Password"
          onChange={e => setForm({...form, password: e.target.value})} />

        <button onClick={handleSubmit}
          className="bg-blue-500 text-white w-full p-2 rounded">
          Signup
        </button>
        <div className="flex m-2">
          <h2>If Already Registered ?  </h2>
          <a href="/">Login Here</a>
        </div>
      </div>
    </div>
  );
}

export default Signup;