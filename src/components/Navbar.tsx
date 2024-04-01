import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
// import { links } from "../constants";

export default function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const response = await fetch("http://localhost:4000/api/v1/logout", {
      method: "POST",
      credentials: "include",
      mode: "cors",
    });
    console.log(response);
    localStorage.clear();
    setIsLoggedIn(localStorage.getItem("jwt") as string);
    navigate("/login");
  };
  return (
    <div className="w-screen">
      <nav className="w-[70%] flex justify-between items-center mx-auto py-[20px]">
        <div>
          <span className=" uppercase font-bold text-[2rem]">My Blog</span>
        </div>

        <div className="flex items-center font-mediun text-[1.2rem]">
          {isLoggedIn && (
            <button
              className="mr-[15px] hover:text-blue-500 transition-all duration-150"
              onClick={handleLogout}
            >
              logout
            </button>
          )}
          <Link
            to="/"
            className="mr-[15px] hover:text-blue-500 transition-all duration-150"
          >
            Blogs
          </Link>
          <Link
            to="/login"
            className={
              isLoggedIn
                ? "hidden"
                : "mr-[15px] hover:text-blue-500 transition-all duration-150"
            }
          >
            login
          </Link>
          <Link
            to="/register"
            className={
              isLoggedIn
                ? "hidden"
                : "mr-[15px] hover:text-blue-500 transition-all duration-150"
            }
          >
            register
          </Link>
          {isLoggedIn && (
            <Link
              to="/new"
              className="mr-[15px] hover:text-blue-500 transition-all duration-150"
            >
              Post blog
            </Link>
          )}
        </div>

        {/* <div className="flex items-center font-mediun text-[1.2rem]">
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
        </div> */}
      </nav>
    </div>
  );
}
