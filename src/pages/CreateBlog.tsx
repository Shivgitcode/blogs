import { useState } from "react";
import toast from "react-hot-toast";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const [quill, setQuill] = useState("");
  const [post, setPost] = useState({ title: "", imgFile: "", description: "" });
  const navigate = useNavigate();

  const handlePost = (e: React.BaseSyntheticEvent) => {
    setPost((prev) => {
      return {
        ...prev,
        [e.target.name]:
          e.target.name === "imgFile" ? e.target.files[0] : e.target.value,
      };
    });
    console.log(post);
    console.log(post.imgFile[0]);
  };

  const handleQuill = (
    content: string,
    delta: any,
    source: any,
    editor: any
  ) => {
    const text = editor.getText().trim();
    setQuill(content);
    // setQuill(text);
    // setQuill(editor.getText());
    setPost((prev) => {
      return { ...prev, description: text };
    });
    // console.log(post);
    console.log(quill);
    console.log(post);
  };

  const handleForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", post.title);
    formData.append("imgFile", post.imgFile);
    formData.append("description", post.description);

    const response = await fetch("http://localhost:4000/api/v1/post", {
      method: "POST",
      mode: "cors",

      credentials: "include",
      body: formData,
    });
    console.log(response);

    if (response.ok) {
      const res_data = await response.json();
      toast.success(res_data.message);
      navigate("/");
      console.log(res_data);
    } else {
      const res_data = await response.json();
      console.log(res_data);
    }
  };
  return (
    <div className="w-screen ">
      <div className="w-[70%] mx-auto my-[40px]">
        <form
          onSubmit={handleForm}
          className=" flex flex-col gap-4 w-full"
          encType="multipart/form-data"
        >
          <div>
            <input
              type="text"
              name="title"
              onChange={handlePost}
              // value={post.title}
              placeholder="Title"
              className="border-2 rounded-md w-full px-4 py-3 placeholder:text-[20px]"
            />
          </div>
          <div>
            <input
              type="file"
              name="imgFile"
              onChange={handlePost}
              placeholder="Drag a File"
              className="border-2 rounded-md w-full px-4 py-3 placeholder:text-[20px]"
            ></input>
          </div>
          <div>
            <ReactQuill
              theme="snow"
              value={quill}
              onChange={handleQuill}
            ></ReactQuill>
          </div>
          <button>submit</button>
        </form>
      </div>
    </div>
  );
}
