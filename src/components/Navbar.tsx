import { Link } from "react-router-dom";
import { links } from "../constants";

export default function Navbar() {
  return (
    <div className="w-screen">
      <nav className="w-[70%] flex justify-between items-center mx-auto py-[20px]">
        <div>
          <span className=" uppercase font-bold text-[2rem]">My Blog</span>
        </div>

        <div className="flex items-center font-mediun text-[1.2rem]">
          {links.map((el) => {
            return (
              <Link
                to={el.href}
                className=" mr-[15px] hover:text-blue-500 transition-all duration-150"
              >
                {el.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
