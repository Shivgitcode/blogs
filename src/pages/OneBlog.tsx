import { useParams } from "react-router-dom";

export default function OneBlog() {
  const { id } = useParams();
  return <div>One {id}</div>;
}
