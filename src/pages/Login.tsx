import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { useAppContext } from "../context/AppContext";

export default function Login() {
  const [login, setLogin] = useState({ username: "", password: "" });
  const { setIsLoggedIn } = useAppContext();
  const [eye, setEye] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/v1/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(login),
    });

    console.log(response);

    if (response.ok) {
      const res_data = await response.json();
      localStorage.setItem("jwt", res_data.token);
      setIsLoggedIn(localStorage.getItem("jwt") as string);
      navigate("/");
      toast.success(res_data.message);
      console.log(res_data);
    } else {
      const res_data = await response.json();
      toast.error(res_data.message);
      console.log(res_data);
    }
  };

  const handleLogin = async (e: React.BaseSyntheticEvent) => {
    setLogin((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    console.log(login);
  };

  // if (loading) return "submitting";
  // if (error) return `${error.message}`;

  return (
    <div className="w-screen  flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[35%] py-[4rem] mx-auto mt-[100px]">
        <h1 className="text-[42px] font-bold">Login</h1>
        <form
          action=""
          className="flex flex-col pt-[50px] pb-[30px] gap-4 w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-full">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              value={login.username}
              onChange={handleLogin}
              className="border-2 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col w-full relative">
            <input
              type={eye ? "password" : "text"}
              name="password"
              id="password"
              value={login.password}
              onChange={handleLogin}
              placeholder="password"
              autoComplete="off"
              className="border-2  rounded-md px-2 py-1 flex-1 "
            />
            <span
              className="absolute cursor-pointer right-3 top-2 "
              onClick={() => setEye(!eye)}
            >
              {eye ? (
                <FaEye fontSize={20}></FaEye>
              ) : (
                <FaEyeSlash fontSize={20}></FaEyeSlash>
              )}
            </span>
          </div>
          <button className="w-full bg-[#383B43] text-white text-[1.5rem] py-1 rounded-lg">
            Login
          </button>
        </form>
        <p className="w-full text-end">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
