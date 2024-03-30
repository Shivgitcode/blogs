import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export default function Protected({
  Component,
}: {
  Component: React.ComponentType;
}) {
  const { isLoggedIn } = useAppContext();
  console.log(isLoggedIn);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      return navigate("/login");
    }
  });

  return (
    <div>
      <Component></Component>
    </div>
  );
}
