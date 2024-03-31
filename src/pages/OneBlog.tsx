import { useParams } from "react-router-dom";
import { blogs } from "../constants";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function OneBlog() {
  const { id } = useParams();
  const [userId, setUserId] = useState("");
  const [oneUser, setOneUser] = useState({
    title: "",
    img: "",
    description: "",
  });
  // const oneBlog = blogs[0];
  useEffect(() => {
    setUserId(id as string);
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:4000/api/v1/post/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          credentials: "include",
        }
      );
      if (response.ok) {
        const res_data = await response.json();
        const { data } = res_data;
        console.log(res_data);
        setOneUser(data);
        toast.success("data fetched successfully");
      } else {
        const res_data = await response.json();
        console.log(res_data);
        toast.error(res_data.error);
      }
    };
    fetchData();
  }, [userId]);

  return (
    <div className="w-[70%] mx-auto h-full">
      <div className="flex flex-col items-start gap-6 mt-10">
        <h1 className="font-bold text-[42px]">{oneUser.title}</h1>
        <div className="w-full">
          <div className="w-[75%] mx-auto">
            <img
              src={oneUser.img}
              className="w-full mx-auto rounded-lg"
              alt=""
            />
          </div>
        </div>
        <div className="font-normal mt-10 text-[23px] leading-8">
          <p>{oneUser.description}</p>
        </div>
      </div>
    </div>
  );
}
