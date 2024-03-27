import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function CreateBlog() {
  return (
    <div className="w-screen ">
      <div className="w-[70%] mx-auto my-[40px]">
        <form action="" className=" flex flex-col gap-4 w-full">
          <div>
            <input
              type="text"
              name="Title"
              id=""
              placeholder="Title"
              className="border-2 rounded-md w-full px-4 py-3 placeholder:text-[20px]"
            />
          </div>
          <div>
            <input
              type="file"
              placeholder="Drag a File"
              className="border-2 rounded-md w-full px-4 py-3 placeholder:text-[20px]"
            ></input>
          </div>
          <div>
            <ReactQuill theme="snow"></ReactQuill>
          </div>
        </form>
      </div>
    </div>
  );
}
