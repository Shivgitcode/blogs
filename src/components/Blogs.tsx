import { blogs } from "../constants";

export default function Blogs() {
  return (
    <div className="flex w-[70%]  justify-start gap-[70px] items-center flex-wrap  mx-auto ">
      {blogs.map((el) => {
        return (
          <div className="flex flex-col ">
            <div className="w-[400px]">
              <img src={el.img} alt="not found" className="w-full" />
            </div>
            <div>
              <div>
                <h3>{el.title}</h3>
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
