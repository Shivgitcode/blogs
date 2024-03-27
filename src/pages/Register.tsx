import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="w-screen  flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[35%] py-[4rem] mx-auto mt-[100px]">
        <h1 className="text-[42px] font-bold">Register</h1>
        <form
          action=""
          className="flex flex-col pt-[50px] pb-[30px] gap-4 w-full"
        >
          <div className="flex flex-col w-full">
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              className="border-2 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col w-full">
            <input
              type="text"
              name="email"
              id="username"
              placeholder="email"
              className="border-2 rounded-md px-2 py-1"
            />
          </div>
          <div className="flex flex-col w-full">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="border-2  rounded-md px-2 py-1 flex-1"
            />
          </div>
          <button className="w-full bg-[#383B43] text-white text-[1.5rem] py-1 rounded-lg">
            sign up
          </button>
        </form>
        <p className="w-full text-end">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            login
          </Link>
        </p>
      </div>
    </div>
  );
}
