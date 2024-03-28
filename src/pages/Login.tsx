import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [login, setLogin] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const loginUser = gql`
    mutation handleLogin($user: LoginInput) {
      loginUser(user: $user)
    }
  `;
  const [useLogin, { loading, error, data }] = useMutation(loginUser);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    useLogin({ variables: { user: login } });
  };

  const handleLogin = async (e: React.BaseSyntheticEvent) => {
    setLogin((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    console.log(login);
  };

  if (loading) return "submitting";
  if (error) return `${error.message}`;
  if (data) {
    if (data) {
      localStorage.setItem("jwt", data.loginUser);
      toast.success("logged In successfully");
      navigate("/");
    }
  }
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
          <div className="flex flex-col w-full">
            <input
              type="password"
              name="password"
              id="password"
              value={login.password}
              onChange={handleLogin}
              placeholder="password"
              className="border-2  rounded-md px-2 py-1 flex-1"
            />
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
