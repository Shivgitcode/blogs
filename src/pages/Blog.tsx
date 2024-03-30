import { useEffect, useState } from "react";
import Blogs from "../components/Blogs";
import Hero from "../components/Hero";

export default function Blog() {
  const [post, setPost] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:4000/api/v1/post", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        credentials: "include",
      });

      if (response.ok) {
        const res_data = await response.json();
        console.log(res_data);
        setPost(res_data.data);
      } else {
        const res_data = await response.json();
        console.log(res_data);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Hero></Hero>
      <Blogs posts={post}></Blogs>
    </div>
  );
}
