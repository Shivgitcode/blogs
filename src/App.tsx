import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateBlog from "./pages/CreateBlog";
import OneBlog from "./pages/OneBlog";
import MainHeader from "./pages/MainHeader";
import Navbar from "./components/Navbar";
import Protected from "./components/Protected";

function App() {
  return (
    <div className=" font-poppins">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<MainHeader></MainHeader>}>
          <Route
            index
            element={<Protected Component={Blog}></Protected>}
          ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/new" element={<CreateBlog></CreateBlog>}></Route>
          <Route path="/blog/:id" element={<OneBlog></OneBlog>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
