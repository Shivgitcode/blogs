import Blogs from "../components/Blogs";
import Hero from "../components/Hero";
import { useQuery, gql } from "@apollo/client";

export default function Blog() {
  const getPost = gql`
    query post {
      title
    }
  `;

  const { loading, error, data } = useQuery(getPost);

  if (loading) {
    return <div>loading</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  } else {
    console.log(data);
  }

  return (
    <div>
      <Hero></Hero>
      <Blogs></Blogs>
    </div>
  );
}
