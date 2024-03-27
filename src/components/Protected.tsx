import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected({
  Component,
}: {
  Component: React.ComponentType;
}) {
  const isLoggedIn = false;
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      return navigate("/login");
    }
  });

  return (
    <div>
      <Component></Component>
    </div>
  );
}
