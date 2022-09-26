import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Class() {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return <>Class</>;
}

export default Class;
