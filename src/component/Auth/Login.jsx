import React, { useState } from "react";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-700">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center p-20 border-emerald-600"
        >
          <input
            required
            className="border-2 border-emerald-600 rounded-full py-4 px-5 text-xl text-black outline-none bg-transparent placeholder:text-gray-500"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className="border-2 border-emerald-600 rounded-full py-4 px-5 text-xl text-black outline-none mt-3 bg-transparent placeholder:text-gray-500"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="border-2 border-none cursor-pointer rounded-full py-4 px-5  w-full text-xl text-white outline-none bg-emerald-600 hover:bg-emerald-700 mt-7 placeholder:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
