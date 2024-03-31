import { Link } from "react-router-dom";
import { blogs } from "../constants";

export default function Blogs({ posts }: { posts: any }) {
  return (
    <div className="flex w-[70%]  justify-start gap-[70px] items-center flex-wrap  mx-auto ">
      {posts?.map((el: any) => {
        return (
          <div className="flex flex-col " key={el.id}>
            <div className="w-[400px]">
              <img src={el.img} alt="not found" className="w-full" />
            </div>
            <div>
              <div className=" mt-2 font-bold text-[20px]">
                <Link to={`/blog/${el.id}`}>{el.title}</Link>
              </div>
              <div className="hidden">
                <p>{el.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
