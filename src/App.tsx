import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateBlog from "./pages/CreateBlog";
import OneBlog from "./pages/OneBlog";

function App() {
  return (
    <div className=" font-poppins">
      <Routes>
        <Route path="/" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/new" element={<CreateBlog></CreateBlog>}></Route>
        <Route path="/blog/:id" element={<OneBlog></OneBlog>}></Route>
      </Routes>
    </div>
  );
}

export default App;
