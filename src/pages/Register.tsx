import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
export default function Login() {
  type FormData = {
    username: string;
    email: string;
    password: string;
  };
  const RegisterSchema: ZodType<FormData> = z.object({
    username: z.string(),
    email: z.string().email().endsWith("@gmail.com"),
    password: z.string().min(8),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(RegisterSchema),
  });
  const navigate = useNavigate();

  const submitHandler = async (data: FormData) => {
    console.log(data);
    const response = await fetch("http://localhost:4000/api/v1/register", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(register),
    });

    const res_data = await response.json();
    console.log("this is res", res_data);
    console.log(response);

    if (response.ok) {
      const res_data = await response.json();
      console.log(res_data);
      navigate("/login");
    } else {
      toast.error("cannot register");
      const res_data = await response.json();
      console.log(res_data);
      console.log(response);

      console.log(register);
    }
  };
  return (
    <div className="w-screen  flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[35%] py-[4rem] mx-auto mt-[100px]">
        <h1 className="text-[42px] font-bold">Register</h1>
        <form
          className="flex flex-col pt-[50px] pb-[30px] gap-4 w-full"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="flex flex-col w-full">
            <input
              type="text"
              id="username"
              placeholder="username"
              {...register("username")}
              className="border-2 rounded-md px-2 py-1"
            />
            {errors.username && <div>{errors.username.message}</div>}
          </div>
          <div className="flex flex-col w-full">
            <input
              type="text"
              {...register("email")}
              placeholder="email"
              className="border-2 rounded-md px-2 py-1"
            />
            {errors.email && <div>{errors.email.message}</div>}
          </div>
          <div className="flex flex-col w-full">
            <input
              type="password"
              {...register("password")}
              placeholder="password"
              className="border-2  rounded-md px-2 py-1 flex-1"
            />
            {errors.password && <div>{errors.password.message}</div>}
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
